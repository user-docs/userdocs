defmodule UserdocsDesktopWeb.Root.BrowserAutomationEventHandlers do
  alias Userdocs.Pages

  def handle_navigate(page_id) do
    user = Client.current_user()
    project = Client.current_project()
    page = Client.get_page!(page_id)
    url = Pages.effective_url(page, project, user)
    BrowserController.execute({:navigate, %{url: url}})
  end
end
