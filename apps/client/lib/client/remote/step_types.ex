defmodule Client.Remote.StepTypes do
  require Logger
  alias Client.Requests
  alias Userdocs.StepTypes
  @url "http://localhost:4000/api/step_types"

  def list_step_types(%{access_token: access_token} = opts) do
    params = opts |> Map.take([:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => step_type_attrs}} = Requests.send(request_fun, access_token, params)
    StepTypes.create_step_type_structs(step_type_attrs)
  end
end
