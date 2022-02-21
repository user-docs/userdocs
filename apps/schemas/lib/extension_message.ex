defmodule Schemas.ExtensionMessage do
  @moduledoc "Used for messages from the extension to the application"
  use Schemas.Schema
  import Ecto.Changeset

  @all_fields [
    :generated_selector, :direct_selector, :element_name,
    :tag_name, :action, :keycode, :href, :page_title,
    :ud_id, :outer_html, :value
  ]

  @derive Jason.Encoder
  embedded_schema do
    field :generated_selector, :string
    field :direct_selector, :string
    field :element_name, :string
    field :tag_name, :string
    field :action, :string
    field :keycode, :string
    field :href, :string
    field :page_title, :string
    field :ud_id, :string
    field :outer_html, :string
    field :value, :string
  end

  @doc false
  def changeset(extension_message, attrs) do
    extension_message
    |> cast(attrs, @all_fields)
  end
end
