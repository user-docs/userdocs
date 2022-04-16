defmodule UserdocsDesktopWeb.UserLiveTest do
  use UserdocsDesktopWeb.ConnCase

  import Phoenix.LiveViewTest

  alias Userdocs.UsersFixtures
  alias Userdocs.WebFixtures
  alias Userdocs.ProjectsFixtures

  #|> open_browser(&(System.cmd("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", [&1])))

  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}

  describe "Index" do
    setup [
      :create_password,
      :create_user
    ]

    setup do
      on_exit(fn -> Userdocs.LocalRepo.delete_all(Schemas.Secrets.Secret) end)
    end


    test "logs in correctly", %{conn: conn, user: user, password: password} do
      {:ok, index_live, html} = live(conn, Routes.session_index_path(conn, :new))

      assert index_live
             |> form("#signin-form", user: %{email: "test@example.com", password: ""})
             |> render_change() =~ "can&#39;t be blank"

      assert index_live
            |> form("#signin-form", user: %{email: "test@example.com", password: "asdf"})
            |> render_change() =~ "should be at least 8 character"

      assert index_live
            |> form("#signin-form", user: %{email: user.email, password: password})
            |> render_submit()
            |> follow_redirect(conn, Routes.home_path(conn, :index))
    end
  end
end
