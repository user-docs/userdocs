defmodule Client.Screenshots do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Screenshots.Screenshot

  @callback list_screenshots(map()) :: list(Screenshot)
  @callback create_screenshot(map(), map()) :: {:ok, Screenshot} | {:error, Ecto.Changeset}
  @callback update_screenshot(Screenshot, map(), map()) :: {:ok, Screenshot} | {:error, Ecto.Changeset}
  @callback delete_screenshot(binary(), map()) :: {:ok, Screenshot} | {:error, Ecto.Changeset}
  def create_screenshot(attrs, state),
    do: impl(state, "Screenshots").create_screenshot(attrs, local_or_remote_opts(state)) # TODO: subsume Module.concat into impl

  def update_screenshot(screenshot, attrs, state),
    do: impl(state, "Screenshots").update_screenshot(screenshot, attrs, local_or_remote_opts(state))

  def delete_screenshot(%Screenshot{} = screenshot, state), do: impl(state, "Screenshots").delete_screenshot(screenshot, local_or_remote_opts(state))
  def delete_screenshot(screenshot_id, state) when is_binary(screenshot_id) do
    screenshot = State.Screenshots.get_screenshot!(screenshot_id, state, state_opts())
    impl(state, "Screenshots").delete_screenshot(screenshot, local_or_remote_opts(state))
  end

  def load_screenshots(state, opts) do
    screenshots = impl(state, "Screenshots").list_screenshots(local_or_remote_opts(state, opts))
    StateHandlers.load(state, screenshots, Screenshot, state_opts())
  end
end
