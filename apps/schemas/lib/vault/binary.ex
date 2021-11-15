defmodule Schemas.Encrypted.Binary do
  use Cloak.Ecto.Binary, vault: Userdocs.Vault
end
