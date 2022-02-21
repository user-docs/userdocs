defmodule Userdocs.ExtensionMessageFixtures do
  @moduledoc false
  alias Schemas.ExtensionMessage

  def extension_message(:valid, params \\ %{}) do
    %ExtensionMessage{
      generated_selector: "//body",
      direct_selector: "//body",
      element_name: "Element Name"
    }
    |> Map.merge(params)
  end
end
