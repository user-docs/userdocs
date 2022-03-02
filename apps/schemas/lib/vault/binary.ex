defmodule Schemas.Encrypted.Binary do
  @moduledoc "Defines encrypted binaries for storage in the vault"
  use Cloak.Ecto.Binary, vault: Schemas.Vault
end
