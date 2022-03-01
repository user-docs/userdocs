defmodule Client.Steps do
  @moduledoc """
  The Steps context.
  """
  require Logger
  alias Userdocs.Requests
  alias Userdocs.Steps
  alias Schemas.Steps.Step
  @url Application.compile_env(:userdocs_desktop, :host_url) <> "/api/steps"

  @doc "Returns the list of steps."
  def list_steps(%{access_token: access_token} = opts) do
    params =  Map.take(opts, [:filters])
    request_fun = Requests.build_get(@url)
    {:ok, %{"data" => steps_attrs}} = Requests.send(request_fun, access_token, params)
    Steps.create_step_structs(steps_attrs)
  end

  @doc "Creates a step."
  def create_step(attrs, %{access_token: access_token}) do
    params = %{step: attrs}
    request_fun = Requests.build_create(@url)
    {:ok, %{"data" => step_attrs}} = Requests.send(request_fun, access_token, params)
    Steps.create_step_struct(step_attrs)
  end

  @doc "Updates a step."
  def update_step(%Step{} = step, attrs, %{access_token: access_token}) do
    request_fun = Requests.build_update(@url, step.id)
    {:ok, %{"data" => step_attrs}} = Requests.send(request_fun, access_token, %{step: attrs})
    Steps.create_step_struct(step_attrs)
  end

  @doc "Deletes a step."
  def delete_step(id, %{access_token: access_token}) do
    request = Requests.build_delete(@url, id)
    Requests.send(request, access_token, nil)
  end
end
