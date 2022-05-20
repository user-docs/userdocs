defmodule Client.Context.Elements do
  def find_element(field, value) do
    Client.list_elements()
    |> Enum.find(fn(element) -> element |> Map.get(field) == value end)
  end
end
