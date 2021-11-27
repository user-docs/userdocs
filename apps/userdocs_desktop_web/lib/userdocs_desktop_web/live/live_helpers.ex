defmodule UserdocsDesktopWeb.LiveHelpers do
  import Phoenix.LiveView.Helpers

  @doc """
  Renders a component inside the `UserdocsDesktopWeb.ModalComponent` component.

  The rendered modal receives a `:return_to` option to properly update
  the URL when the modal is closed.

  ## Examples

      <%= live_modal @socket, UserdocsDesktopWeb.PageLive.FormComponent,
        id: @page.id || :new,
        action: @live_action,
        page: @page,
        return_to: Routes.page_index_path(@socket, :index) %>
  """
  def live_modal(_socket, component, opts) do
    path = Keyword.fetch!(opts, :return_to)
    modal_opts = [id: :modal, return_to: path, component: component, opts: opts]
    live_component(UserdocsDesktopWeb.ModalComponent, modal_opts)
  end

  def maybe_push_redirect(socket = %{assigns: %{return_to: return_to}}) do
    Phoenix.LiveView.push_redirect(socket, to: return_to)
  end
  def maybe_push_redirect(socket), do: socket

  def maybe_push_patch(socket = %{assigns: %{return_to: return_to}}) do
    Phoenix.LiveView.push_patch(socket, to: return_to)
  end
  def maybe_push_patch(socket), do: socket

  def select_list(items, field, true) do
    select_list(items, field, false)
    |> List.insert_at(0, {"None", ""})
  end
  def select_list(items, field, false) do
    items
    |> Enum.map(&{Map.get(&1, field), &1.id})
  end

  def underscored_map_keys(%Date{} = val), do: val
  def underscored_map_keys(%DateTime{} = val), do: val
  def underscored_map_keys(%NaiveDateTime{} = val), do: val
  def underscored_map_keys(map) when is_map(map) do
    for {key, val} <- map, into: %{} do
      {Inflex.underscore(key), underscored_map_keys(val)}
    end
  end
  def underscored_map_keys(val), do: val
end
