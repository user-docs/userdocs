defmodule UserdocsWeb.Presence do
  @moduledoc false
  use Phoenix.Presence,
    otp_app: :userdocs_web,
    pubsub_server: Userdocs.PubSub
end
