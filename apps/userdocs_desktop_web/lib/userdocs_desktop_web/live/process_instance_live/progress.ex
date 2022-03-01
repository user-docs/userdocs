defmodule UserdocsDesktopWeb.ProcessInstanceLive.Progress do
  use UserdocsDesktopWeb, :live_component

  alias Schemas.ProcessInstances.ProcessInstance
  alias Userdocs.StepInstances

  def percent_complete(process) do
    StepInstances.count_completed_step_instances(process.process_instance.step_instances) / Enum.count(process.steps)
  end
end
