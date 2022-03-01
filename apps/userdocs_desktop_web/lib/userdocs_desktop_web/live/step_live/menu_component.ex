defmodule UserdocsDesktopWeb.StepLive.MenuComponent do
  @moduledoc "Step Menu"
  use UserdocsDesktopWeb, :live_component
  require Logger
  alias Schemas.Steps.Step
  alias Userdocs.Steps
  alias UserdocsDesktopWeb.Icons
  alias UserdocsDesktopWeb.StepLive.StepName
  alias UserdocsDesktopWeb.ProcessInstanceLive
  alias UserdocsDesktopWeb.StepInstanceLive

  @impl true
  def update(%{steps: _steps} = assigns, socket) do
    {
      :ok,
      socket
      |> assign(assigns)
    }
  end

  def step_frame([%Step{} | _] = steps) do
    [_ | result] = Enum.zip([[nil, nil] ++ steps, [nil] ++ steps ++ [nil], steps ++ [nil, nil]])
    result |> Enum.reverse() |> tl() |> Enum.reverse()
  end
  def step_frame([]), do: []
end
