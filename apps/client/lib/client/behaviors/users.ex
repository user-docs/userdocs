defmodule Client.Users do
  import Client.APISupport
  import Client.Constants
  alias Schemas.Users.User

  @callback list_users(map()) :: list(User)

  @callback update_user(User, map(), map()) :: {:ok, User} | {:error, Ecto.Changeset}


   def update_user(user, attrs, state),
    do: impl(state, "Users").update_user(user, attrs, local_or_remote_opts(state))


  def load_users(state, opts) do
    users = impl(state, "Users").list_users(local_or_remote_opts(state, opts))
    StateHandlers.load(state, users, User, state_opts())
  end
end
