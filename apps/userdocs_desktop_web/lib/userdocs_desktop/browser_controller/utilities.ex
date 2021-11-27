defmodule UserdocsDesktop.BrowserController.Utilities do
  require Logger
  alias UserdocsDesktopWeb.Endpoint
  alias UserdocsDesktopWeb.Router.Helpers, as: Routes
  alias ChromeRemoteInterface.RPC.DOM
  alias ChromeRemoteInterface.PageSession

  def script(css_text) do
    url = Endpoint.url()
    path = Routes.static_path(Endpoint, "/assets/annotations.js")
    """
    console.log('Running script');
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `#{css_text}`
    var script = document.createElement('script');
    script.type = 'text/javascript'
    script.src = '#{url <> path}'
    document.addEventListener('DOMContentLoaded', () => {
      var head = document.getElementsByTagName('head')[0]
      head.appendChild(style);
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
      {:ok, %{"result" => %{"nodeId" => node_id}}} -> {:ok, node_id}
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

  def get_box(page_pid, node_id) do
    {:ok, %{"result" => %{"model" => model}}} = DOM.getBoxModel(page_pid, %{nodeId: node_id})

    %{
      "border" => [
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
    } = model

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
end
