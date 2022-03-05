defmodule Schemas.Vault do
  @moduledoc "definitions for storage of encrypted values"
  use Cloak.Vault, otp_app: :userdocs

  @impl GenServer
  def init(config) do
    config =
      Keyword.put(config, :ciphers, [
        default: {Cloak.Ciphers.AES.GCM, tag: "AES.GCM.V1", key: Base.decode64!("JdIqJR0pDeDCeP2aw1Zcob7zfBuWGdKWqinsDUKbfdw=")}
      ])

    {:ok, config}
  end
end
