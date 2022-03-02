defmodule BrowserController.Utilities do
  @moduledoc "Utility functions for managing a browser over the Chrome RDP"
  require Logger
  alias UserdocsDesktopWeb.Endpoint
  alias UserdocsDesktopWeb.Router.Helpers, as: Routes
  alias ChromeRemoteInterface.RPC.DOM
  alias ChromeRemoteInterface.PageSession
  alias ChromeRemoteInterface.RPC.Runtime

  def script() do
    url = Endpoint.url()
    default_css_path = Routes.static_path(Endpoint, "/styles/sui_font.css")
    team_css_path = Routes.static_path(Endpoint, "/styles/team_css_overrides.css")
    annotations_path = Routes.static_path(Endpoint, "/assets/annotations.js")
    """
    console.log('Running script');
    var team_style = document.createElement('link');
    team_style.rel = 'stylesheet'
    team_style.href = '#{url <> team_css_path}'
    var default_style = document.createElement('link');
    default_style.rel = 'stylesheet'
    default_style.href = '#{url <> default_css_path}'
    var script = document.createElement('script');
    script.type = 'text/javascript'
    script.src = '#{url <> annotations_path}'
    window.dpi = (function () {
      let i = 1;
      while ( !hasMatch(i) ) i *= 2;
      function getValue(start, end) {
          if (start > end) return -1;
          let average = (start + end) / 2;
          if ( hasMatch(average) ) {
              if ( start == average || !hasMatch(average - 1) ) {
                  return average;
              } else {
                  return getValue(start, average - 1);
              }
          } else {
              return getValue(average + 1, end);
          }
      }
      function hasMatch(x) {
          return matchMedia(`(max-resolution: ${x}dpi)`).matches;}
      return getValue(i / 2, i) | 0;
    });
    document.addEventListener('DOMContentLoaded', () => {
      var head = document.getElementsByTagName('head')[0]
      head.appendChild(default_style);
      head.appendChild(team_style);
      head.appendChild(script);
    }, false);
    """
  end

  def get_root_node_id(page_pid) do
    {:ok, %{"result" => %{"root" => %{"nodeId" => root_node_id}}}} = DOM.getDocument(page_pid, %{depth: 1})
    {:ok, root_node_id}
  end

  def get_node_id("css", selector, page_pid) do
    {:ok, root_node_id} = get_root_node_id(page_pid)
    case DOM.querySelector(page_pid, %{nodeId: root_node_id, selector: selector}) do
      {:ok, %{"result" => %{"nodeId" => node_id}}} ->
        {:ok, node_id}
      result -> Logger.error("#{__MODULE__}.get_node_id returned #{inspect(result)}")
    end
  end

  def get_node_id("xpath", selector, page_pid) do
    DOM.getDocument(page_pid)
    {:ok, %{"result" => %{"resultCount" => result_count, "searchId" => search_id}}} =
      PageSession.execute_command(page_pid, "DOM.performSearch", %{query: selector}, [])
    case result_count do
      0 -> {:ok, 0}
      _ ->
        Logger.debug("Greater than 0 search results")
        search_params = %{searchId: search_id, fromIndex: 0, toIndex: 1}
        {:ok, %{"result" => %{"nodeIds" => node_ids}}} =
          PageSession.execute_command(page_pid, "DOM.getSearchResults", search_params, [])
        case node_ids do
          [node_id] -> {:ok, node_id}
          [] -> {:ok, 0}
        end
    end
  end

  def get_remote_object("css", selector, page_pid) do
    case Runtime.evaluate(page_pid, %{expression: "document.querySelector('#{selector}');"}) do
      {:ok, %{"result" => %{"result" => %{"subtype" => "null", "type" => "object", "value" => nil}}}} ->
        {:warn, "Element Not Found in Browser"}
      {:ok, %{"result" => %{"result" => remote_object}}} -> {:ok, cast_remote_object(remote_object)}
    end
  end
  def get_remote_object("xpath", selector, page_pid) do
    opts = %{
      includeCommandLineAPI: true,
      expression: "elements = $x('#{selector}'); elements[0];"
    }
    case Runtime.evaluate(page_pid, opts) do
      {:ok, %{"result" => %{"result" => %{"type" => "undefined"}}}} -> {:warn, "Element Not Found"}
      {:ok, %{"result" => %{"result" => remote_object}}} -> {:ok, cast_remote_object(remote_object)}
    end
  end

  def cast_remote_object(%{
    "className" => class_name,
    "description" => description,
    "objectId" => object_id,
    "subtype" => subtype,
    "type" => type
  }) do
    %{
      class_name: class_name,
      description: description,
      object_id: object_id,
      subtype: subtype,
      type: type
    }
  end

  def get_document(page_pid) do
    {:ok, root_node_id} = get_root_node_id(page_pid)
    case DOM.getOuterHTML(page_pid, %{nodeId: root_node_id}) do
      {:ok, %{"result" => %{"outerHTML" => outer_html}}} ->
        {:ok, outer_html}
    end
  end

  def get_url(server) do
    {:ok, pages} = ChromeRemoteInterface.Session.list_pages(server)

    pages
    |> Enum.filter(fn(p) -> p["type"] == "page" end)
    |> Enum.at(-1)
    |> Map.get("url")
  end

  def get_attributes(page_pid, node_id) do
    {:ok, %{"result" => %{"attributes" => attrs}}} = DOM.getAttributes(page_pid, %{nodeId: node_id})
    {:ok, parse_attributes(%{}, attrs)}
  end

  def parse_attributes(acc, [key, value]), do: Map.put(acc, String.to_atom(key), value)
  def parse_attributes(acc, [key, value | tail]),
    do: Map.put(acc, String.to_atom(key), value) |> parse_attributes(tail)

  def maybe_set_class("", _, _), do: :ok
  def maybe_set_class(class, page_pid, node_id) do
    DOM.setAttributeValue(page_pid, %{nodeId: node_id, name: "class", value: class})
    :ok
  end

  def maybe_set_attr("", _key, _page_pid, _node_id), do: :ok
  def maybe_set_attr(value, key, page_pid, node_id) do
    DOM.setAttributeValue(page_pid, %{nodeId: node_id, name: key, value: value})
    :ok
  end

  def get_box(page_pid, %{node_id: node_id}) do
    case DOM.getBoxModel(page_pid, %{nodeId: node_id}) do
      {:ok, %{"result" => %{"model" => model}}} ->
        {:ok, cast_box(model)}
      {:error, %{"error" => %{"message" => message}}} ->
        Logger.error("#{__MODULE__}.get_box returned error #{message}")
        {:error, message}
      result ->
        Logger.error("#{__MODULE__}.get_box returned #{inspect(result)}")
    end
  end
  def get_box(page_pid, %{object_id: object_id}) do
    case DOM.getBoxModel(page_pid, %{objectId: object_id}) do
      {:ok, %{"result" => %{"model" => model}}} -> {:ok, cast_box(model)}
      {:error, %{"error" => %{"message" => message}}} -> {:error, message}
      result ->
        Logger.error("#{__MODULE__}.get_box returned #{inspect(result)}")
    end
  end

  def cast_box(%{"border" => [
      border_upper_left_x, border_upper_left_y,
      border_upper_right_x, border_upper_right_y,
      border_lower_right_x, border_lower_right_y,
      border_lower_left_x, border_lower_left_y
    ],
    "content" => [
      content_upper_left_x, content_upper_left_y,
      content_upper_right_x, content_upper_right_y,
      content_lower_right_x, content_lower_right_y,
      content_lower_left_x, content_lower_left_y
    ],
    "height" => height,
    "margin" => [
      margin_upper_left_x, margin_upper_left_y,
      margin_upper_right_x, margin_upper_right_y,
      margin_lower_right_x, margin_lower_right_y,
      margin_lower_left_x, margin_lower_left_y
    ],
    "padding" => [
      padding_upper_left_x, padding_upper_left_y,
      padding_upper_right_x, padding_upper_right_y,
      padding_lower_right_x, padding_lower_right_y,
      padding_lower_left_x, padding_lower_left_y
    ],
    "width" => width
  }) do
    %{
      border: %{
        upper_left: %{x: border_upper_left_x, y: border_upper_left_y},
        upper_right: %{x: border_upper_right_x, y: border_upper_right_y},
        lower_right: %{x: border_lower_right_x, y: border_lower_right_y},
        lower_left: %{x: border_lower_left_x, y: border_lower_left_y}
      },
      content: %{
        upper_left: %{x: content_upper_left_x, y: content_upper_left_y},
        upper_right: %{x: content_upper_right_x, y: content_upper_right_y},
        lower_right: %{x: content_lower_right_x, y: content_lower_right_y},
        lower_left: %{x: content_lower_left_x, y: content_lower_left_y}
      },
      margin: %{
        upper_left: %{x: margin_upper_left_x, y: margin_upper_left_y},
        upper_right: %{x: margin_upper_right_x, y: margin_upper_right_y},
        lower_right: %{x: margin_lower_right_x, y: margin_lower_right_y},
        lower_left: %{x: margin_lower_left_x, y: margin_lower_left_y}
      },
      padding: %{
        upper_left: %{x: padding_upper_left_x, y: padding_upper_left_y},
        upper_right: %{x: padding_upper_right_x, y: padding_upper_right_y},
        lower_right: %{x: padding_lower_right_x, y: padding_lower_right_y},
        lower_left: %{x: padding_lower_left_x, y: padding_lower_left_y}
      },
      height: height,
      width: width
    }
  end

  def get_master_box([]) do
    %{
      border: %{upper_left: %{x: 0, y: 0}, upper_right: %{x: 0, y: 0}, lower_left: %{x: 0, y: 0}, lower_right: %{x: 0, y: 0}},
      content: %{upper_left: %{x: 0, y: 0}, upper_right: %{x: 0, y: 0}, lower_left: %{x: 0, y: 0}, lower_right: %{x: 0, y: 0}},
      margin: %{upper_left: %{x: 0, y: 0}, upper_right: %{x: 0, y: 0}, lower_left: %{x: 0, y: 0}, lower_right: %{x: 0, y: 0}},
      padding: %{upper_left: %{x: 0, y: 0}, upper_right: %{x: 0, y: 0}, lower_left: %{x: 0, y: 0}, lower_right: %{x: 0, y: 0}},
      width: 0, height: 0
    }
  end
  def get_master_box(boxes) do
    IO.inspect(boxes)
    %{
      border: %{
        upper_left: %{
          x: min_dimension(boxes, [:border, :upper_left, :x]),
          y: min_dimension(boxes, [:border, :upper_left, :y])
        },
        upper_right: %{
          x: max_dimension(boxes, [:border, :upper_right, :x]),
          y: min_dimension(boxes, [:border, :upper_right, :y])
        },
        lower_left: %{
          x: min_dimension(boxes, [:border, :upper_left, :x]),
          y: max_dimension(boxes, [:border, :lower_left, :y])
        },
        lower_right: %{
          x: max_dimension(boxes, [:border, :lower_right, :x]),
          y: max_dimension(boxes, [:border, :lower_right, :y])
        }
      },
      content: %{
        upper_left: %{
          x: min_dimension(boxes, [:content, :upper_left, :x]),
          y: min_dimension(boxes, [:content, :upper_left, :y])
        },
        upper_right: %{
          x: max_dimension(boxes, [:content, :upper_right, :x]),
          y: min_dimension(boxes, [:content, :upper_right, :y])
        },
        lower_left: %{
          x: min_dimension(boxes, [:content, :upper_left, :x]),
          y: max_dimension(boxes, [:content, :lower_left, :y])
        },
        lower_right: %{
          x: max_dimension(boxes, [:content, :lower_right, :x]),
          y: max_dimension(boxes, [:content, :lower_right, :y])
        }
      },
      margin: %{
        upper_left: %{
          x: min_dimension(boxes, [:margin, :upper_left, :x]),
          y: min_dimension(boxes, [:margin, :upper_left, :y])
        },
        upper_right: %{
          x: max_dimension(boxes, [:margin, :upper_right, :x]),
          y: min_dimension(boxes, [:margin, :upper_right, :y])
        },
        lower_left: %{
          x: min_dimension(boxes, [:margin, :upper_left, :x]),
          y: max_dimension(boxes, [:margin, :lower_left, :y])
        },
        lower_right: %{
          x: max_dimension(boxes, [:margin, :lower_right, :x]),
          y: max_dimension(boxes, [:margin, :lower_right, :y])
        }
      },
      padding: %{
        upper_left: %{
          x: min_dimension(boxes, [:padding, :upper_left, :x]),
          y: min_dimension(boxes, [:padding, :upper_left, :y])
        },
        upper_right: %{
          x: max_dimension(boxes, [:padding, :upper_right, :x]),
          y: min_dimension(boxes, [:padding, :upper_right, :y])
        },
        lower_left: %{
          x: min_dimension(boxes, [:padding, :upper_left, :x]),
          y: max_dimension(boxes, [:padding, :lower_left, :y])
        },
        lower_right: %{
          x: max_dimension(boxes, [:padding, :lower_right, :x]),
          y: max_dimension(boxes, [:padding, :lower_right, :y])
        }
      },
      width: Kernel.round(max_dimension(boxes, [:border, :upper_right, :x]) - min_dimension(boxes, [:border, :upper_left, :x])),
      height: Kernel.round(max_dimension(boxes, [:border, :lower_right, :y]) - min_dimension(boxes, [:border, :upper_right, :y]))
    }
  end

  def min_dimension(boxes, path) do
    Enum.map(boxes, fn(box) ->
      Kernel.get_in(box, path)
    end)
    |> Enum.min()
  end

  def max_dimension(boxes, path) do
    Enum.map(boxes, fn(box) ->
      Kernel.get_in(box, path)
    end)
    |> Enum.max()
  end
end
