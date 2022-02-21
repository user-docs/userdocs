defmodule ClientTest.AnnotationTypes do
  use UserdocsDesktopWeb.ConnCase
  alias Userdocs.UsersFixtures
  alias Userdocs.WebFixtures

  defp create_annotation_type(_), do: %{annotation_type: WebFixtures.annotation_type(:badge)}
  defp create_password(_), do: %{password: UUID.uuid4()}
  defp create_user(%{password: password}), do: %{user: UsersFixtures.confirmed_user(password)}

  defp create_session(%{user: user, password: password}) do
    {:ok, _user} = Client.authenticate(%{"user" => %{"email" => user.email, "password" => password}})
    %{}
  end
  defp init_state(_) do
    Client.init_state()
    %{}
  end

  describe "AnnotationTypes" do
    setup [
      :create_password,
      :create_user,
      :create_annotation_type,
      :create_session,
      :init_state
    ]

    setup do
      on_exit(fn -> Client.destroy_state() end)
    end

    test "AnnotationTypes Initialize properly" do
      assert Map.has_key?(Client.data(), :annotation_types)
    end

    test "Loads AnnotationTypes", %{annotation_type: annotation_type} do
      Client.load_annotation_types(%{})
      %{annotation_types: [result]} = Client.data()
      assert result.id == annotation_type.id
    end

    test "Lists AnnotationTypes", %{annotation_type: annotation_type} do
      Client.load_annotation_types(%{})
      [result] = Client.list_annotation_types([])
      assert result.id == annotation_type.id
    end
  end
end
