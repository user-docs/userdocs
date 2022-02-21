# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Userdocs.Repo.insert!(%Userdocs.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

args = [environment: :server]
opts = [strategy: :one_for_one, name: __MODULE__]

alias Userdocs.Annotations
alias Userdocs.AnnotationTypes
alias Userdocs.Jobs
alias Userdocs.Users
alias Userdocs.Repo
alias Userdocs.Teams
alias Userdocs.Strategies
alias Userdocs.StepTypes

alias Schemas.Annotations.AnnotationType
alias Schemas.Users.User
alias Schemas.Teams.Team
alias Schemas.Teams.TeamUser
alias Schemas.Projects.Project
alias Schemas.Pages.Page
alias Schemas.Annotations.Annotation
alias Schemas.Elements.Element
alias Schemas.Strategies.Strategy
alias Schemas.Steps.Step
alias Schemas.Steps.StepType
alias Schemas.Processes.Process
alias Schemas.Screenshots.Screenshot

opts = %{broadcast: false, context: %{repo: Userdocs.Repo}}

Repo.delete_all(Screenshot)
Repo.delete_all(Step)
Repo.delete_all(Process)
Repo.delete_all(Annotation)
Repo.delete_all(Element)
Repo.delete_all(Page)
Repo.delete_all(Project)
Repo.delete_all(Step)
Repo.delete_all(Annotation)
Repo.delete_all(AnnotationType)
Repo.delete_all(Strategy)
Repo.delete_all(TeamUser)
Enum.each(Teams.list_teams(opts), fn(t) -> Teams.delete_team(t) end)
Enum.each(Users.list_users(opts), fn(u) -> Users.delete_user(u) end)

_strategies = [
xpath_strategy = %{
  id: "xpath",
  name: "xpath"
},
css_strategy = %{
  id: "css",
  name: "css"
}
]

{:ok, %Strategy{id: xpath_strategy_id}} =
%Strategy{}
|> Strategy.changeset(xpath_strategy)
|> Repo.insert()

{:ok, %Strategy{id: css_strategy_id}} =
%Strategy{}
|> Strategy.changeset(css_strategy)
|> Repo.insert()

# Annotation_types

_annotation_types = [
  outline = %{
    id: "outline",
    args: ["color", "thickness"],
    name: "Outline",
    max_elements: 999,
  },
  blur = %{
    id: "blur",
    args: ["color", "thickness"],
    name: "Blur",
    max_elements: 999,
  },
  badge = %{
    id: "badge",
    args: ["x_orientation", "y_orientation", "size", "label", "color", "x_offset", "y_offset", "font_size"],
    name: "Badge",
    max_elements: 1,
  },
  badge_outline = %{
    id: "badge_outline",
    args: ["x_orientation", "y_orientation", "size", "label", "color",
      "thickness", "x_offset", "y_offset", "font_size"],
    name: "Badge Outline",
    max_elements: 999,
  },
  badge_blur = %{
    id: "badge_blur",
    args: ["x_orientation", "y_orientation", "size", "label", "color", "x_offset", "y_offset", "font_size"],
    name: "Badge Blur",
    max_elements: 999,
  },
  none = %{
    id: "none",
    args: [],
    name: "None",
    max_elements: 0,
  }
]

{:ok, %AnnotationType{id: outline_id}} =
%AnnotationType{}
|> AnnotationType.changeset(outline)
|> Repo.insert()

{:ok, %AnnotationType{id: _blur_id}} =
%AnnotationType{}
|> AnnotationType.changeset(blur)
|> Repo.insert()

{:ok, %AnnotationType{id: badge_id}} =
%AnnotationType{}
|> AnnotationType.changeset(badge)
|> Repo.insert()

{:ok, %AnnotationType{id: _badge_blur_id}} =
%AnnotationType{}
|> AnnotationType.changeset(badge_blur)
|> Repo.insert()

{:ok, %AnnotationType{id: badge_outline_id}} =
%AnnotationType{}
|> AnnotationType.changeset(badge_outline)
|> Repo.insert()

{:ok, %AnnotationType{id: _none_id}} =
%AnnotationType{}
|> AnnotationType.changeset(none)
|> Repo.insert()

# Step Types
_step_types = [
  navigate = %{
    id: "navigate",
    args: ["page_form"],
    name: "Navigate"
  },
  wait = %{
    id: "wait_for_element",
    args: ["element_id", "element_form"],
    name: "Wait for Element"
  },
  click = %{
    id: "click",
    args: ["element_id", "element_form"],
    name: "Click"
  },
  fill_field = %{
    id: "fill_field",
    args: ["element_id", "element_form", "text"],
    name: "Fill Field"
  },
  apply_annotation = %{
    id: "apply_annotation",
    args: ["annotation_id", "annotation_form"],
    name: "Apply Annotation"
  },
  set_size_explicit = %{
    id: "set_size_explicit",
    args: ["width", "height"],
    name: "Set Size Explicit"
  },
  full_screen_screenshot = %{
    id: "full_screen_screenshot",
    args: ["screenshot_form"],
    name: "Full Screen Screenshot"
  },
  full_screen_svg = %{
    id: "full_screen_svg",
    args: ["screenshot_form"],
    name: "Full Screen SVG Document"
  },
  clear_annotations = %{
    id: "clear_annotations",
    args: [],
    name: "Clear Annotations"
  },
  element_screenshot = %{
    id: "element_screenshot",
    args: ["element_id", "screenshot_id", "margin_all", "margin_top", "margin_bottom", "margin_left", "margin_right", "margin_left"],
    name: "Element Screenshot"
  },
  scroll_to_element = %{
    id: "scroll_to_element",
    args: ["element_id", "element_form"],
    name: "Scroll to Element"
  },
  send_enter = %{
    id: "send_enter",
    args: ["element_id", "element_form"],
    name: "Send Enter Key"
  },
  submit_form = %{
    id: "submit_form",
    args: ["element_id", "element_form"],
    name: "Submit Form"
  },
  hover = %{
    id: "hover",
    args: ["element_id", "element_form"],
    name: "Hover"
  },
]

{:ok, %StepType{id: navigate_id}} =
%StepType{}
|> StepType.changeset(navigate)
|> Repo.insert()

{:ok, %StepType{id: _wait_id}} =
%StepType{}
|> StepType.changeset(wait)
|> Repo.insert()

{:ok, %StepType{id: click_id}} =
%StepType{}
|> StepType.changeset(click)
|> Repo.insert()

{:ok, %StepType{id: fill_field_id}} =
%StepType{}
|> StepType.changeset(fill_field)
|> Repo.insert()

{:ok, %StepType{id: apply_annotation_id}} =
%StepType{}
|> StepType.changeset(apply_annotation)
|> Repo.insert()

{:ok, %StepType{id: set_size_explicit_id}} =
%StepType{}
|> StepType.changeset(set_size_explicit)
|> Repo.insert()

{:ok, %StepType{id: full_screen_screenshot_id}} =
%StepType{}
|> StepType.changeset(full_screen_screenshot)
|> Repo.insert()

{:ok, %StepType{id: clear_annotations_id}} =
%StepType{}
|> StepType.changeset(clear_annotations)
|> Repo.insert()

{:ok, %StepType{id: element_screenshot_id}} =
%StepType{}
|> StepType.changeset(element_screenshot)
|> Repo.insert()

{:ok, %StepType{id: _scroll_to_element_id}} =
%StepType{}
|> StepType.changeset(scroll_to_element)
|> Repo.insert()

{:ok, %StepType{id: _send_enter_id}} =
%StepType{}
|> StepType.changeset(send_enter)
|> Repo.insert()

{:ok, %StepType{id: _submit_form_id}} =
%StepType{}
|> StepType.changeset(submit_form)
|> Repo.insert()

{:ok, %StepType{id: _full_screen_svg_id}} =
%StepType{}
|> StepType.changeset(full_screen_svg)
|> Repo.insert()

# User Data

default_password = "userdocs"

user_1 =
  %{
    email: "johns10davenport@gmail.com",
    password: default_password,
    password_confirmation: default_password,
    email_confirmed_at: DateTime.utc_now()
  }

user_2 =
  %{
    email: "johns10@gmail.com",
    password: default_password,
    password_confirmation: default_password,
    email_confirmed_at: DateTime.utc_now()
  }

test_user_1 =
  %{
    email: "user@organization.com",
    password: "testtesttest",
    password_confirmation: "testtesttest",
    email_confirmed_at: DateTime.utc_now()
  }

test_user_2 =
  %{
    email: "user2@organization.com",
    password: "testtesttest",
    password_confirmation: "testtesttest",
    email_confirmed_at: DateTime.utc_now()
  }

{:ok, user_1 = %User{id: user1_id}} =
  %User{}
  |> User.test_fixture_changeset(user_1)
  |> Repo.insert()

{:ok, user_2 = %User{id: user2_id}} =
%User{}
|> User.test_fixture_changeset(user_2)
|> Repo.insert()

{:ok, _} =
  %User{}
  |> User.test_fixture_changeset(test_user_1)
  |> Repo.insert()

{:ok, _} =
  %User{}
  |> User.test_fixture_changeset(test_user_2)
  |> Repo.insert()

# Team Data

userdocs_team =
  %{
    name: "Userdocs",
    aws_bucket: "userdocs-test",
    aws_access_key_id: "AKIAT5VKLWBUOAYXO656",
    aws_secret_access_key: "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",
    aws_region: "us-east-2",
    css: """
      *,
      *::after,
      *::before {
        transition-delay: 0s !important;
        transition-duration: 0s !important;
        animation-delay: -0.0001s !important;
        animation-duration: 0s !important;
        animation-play-state: paused !important;
        caret-color: transparent !important;
      }
      body::-webkit-scrollbar {
        display: none;
      }
      .userdocs-locator{
        position: absolute;
        width: 0;
        height: 0;
      }
      .userdocs-mask{
        position: relative;
        display: flex;
      }
      .userdocs-badge {
        position: relative;
        color: #fff;
        background-color: blue;
        border-radius: 50%;
        line-height: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        min-width: 1em;
        padding: .3em;
        font-size: 24px;
        z-index: 999999 !important;
        transform: translate(-50%, -50%)
      }
      .userdocs-badge::after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
      .userdocs-outline {
        position: absolute;
        outline-width: 4px;
        outline-color: blue;
        outline-style: solid;
        z-index: 999999 !important;
      }
      .ud-x-middle { margin-left: 50%; margin-right: 50%; }
      .ud-x-right { margin-left: 100%; }
      .ud-x-left { margin-right: 100%; }
      .ud-y-middle { align-self: center; }
      .ud-y-top { align-self: start; }
      .ud-y-bottom { align-self: end; }
    """
  }

loreline_team =
  %{
    name: "LoreLine"
  }

{:ok, userdocs_team = %Team{id: userdocs_team_id}} =
  %Team{}
  |> Team.changeset(userdocs_team)
  |> Repo.insert()

{:ok, loreline_team = %Team{id: loreline_team_id}} =
  %Team{}
  |> Team.changeset(loreline_team)
  |> Repo.insert()

Users.update_user(
  user_1,
  %{default_team_id: userdocs_team_id, current_password: default_password}
)

Users.update_user(
  user_2,
  %{default_team_id: userdocs_team_id, current_password: default_password}
)

# Team Users

team_users = [
  %{
    team_id: userdocs_team_id,
    user_id: user1_id
  },
  %{
    team_id: userdocs_team_id,
    user_id: user2_id
  },
  %{
    team_id: loreline_team_id,
    user_id: user1_id
  }
]

_result = Enum.map(team_users,
  fn(tu) ->
    %TeamUser{}
    |> TeamUser.changeset(tu)
    |> Repo.insert()
  end
)

# Projects

the_internet_project =
  %{
    base_url: "https://the-internet.herokuapp.com",
    name: "The Internet",
    team_id: userdocs_team_id,
    strategy_id: css_strategy_id,
    default_width: 1280,
    default_height: 800
  }
userdocs_project =
  %{
    base_url: "https://app.user-docs.com",
    name: "Userdocs",
    team_id: userdocs_team_id,
    strategy_id: css_strategy_id,
    default_width: 1280,
    default_height: 800
  }

john_davenport_rocks_project =
  %{
    base_url: "https://www.davenport.rocks",
    name: "John Davenport Rocks",
    team_id: loreline_team_id,
    strategy_id: css_strategy_id,
    default_width: 1280,
    default_height: 800
  }

{:ok, the_internet_project = %Project{id: the_internet_project_id}} =
  %Project{}
  |> Project.changeset(the_internet_project)
  |> Repo.insert()

{:ok, userdocs_project = %Project{id: userdocs_project_id}} =
  %Project{}
  |> Project.changeset(userdocs_project)
  |> Repo.insert()

{:ok, john_davenport_rocks_project = %Project{id: john_davenport_rocks_project_id}} =
  %Project{}
  |> Project.changeset(john_davenport_rocks_project)
  |> Repo.insert()


Teams.update_team(userdocs_team, %{default_project_id: userdocs_project_id}, opts)


{:ok, _user_1} = Users.update_user(user_1, %{
  current_password: default_password,
  selected_team_id: userdocs_team_id,
  selected_project_id: userdocs_project_id
})

# Pages

add_remove_page = %{
  name: "Add Remove Elements Page",
  order: 1,
  url: "https://the-internet.herokuapp.com/add_remove_elements/",
  project_id: the_internet_project_id
}

login_page = %{
  name: "Login Page",
  order: 1,
  url: "https://the-internet.herokuapp.com/login",
  project_id: the_internet_project_id
}

processes_page = %{
  name: "Login",
  order: 2,
  url: "https://app.user-docs.com/processes",
  project_id: the_internet_project_id
}

secure_page = %{
  name: "Secure",
  order: 3,
  url: "https://the-internet.herokuapp.com/secure",
  project_id: the_internet_project_id
}

failure_page = %{
  name: "Fail",
  order: 3,
  url: "https://asdf3e33fushdg)*!#&%)*&",
  project_id: userdocs_project_id
}

{:ok, %Page{id: add_remove_page_id}} =
  %Page{}
  |> Page.changeset(add_remove_page)
  |> Repo.insert()

{:ok, %Page{id: _processes_page_id}} =
  %Page{}
  |> Page.changeset(processes_page)
  |> Repo.insert()

{:ok, %Page{id: login_page_id}} =
  %Page{}
  |> Page.changeset(login_page)
  |> Repo.insert()

{:ok, %Page{id: secure_page_id}} =
  %Page{}
  |> Page.changeset(secure_page)
  |> Repo.insert()

{:ok, %Page{id: failure_page_id}} =
  %Page{}
  |> Page.changeset(failure_page)
  |> Repo.insert()

#

_annotations = [
  add_outline = %{
    annotation_type_id: outline_id,
    color: "green",
    description: "Outline",
    font_color: nil,
    font_size: nil,
    label: nil,
    name: "Outline",
    page_id: add_remove_page_id,
    size: nil,
    thickness: 12,
    x_offset: nil,
    x_orientation: nil,
    y_offset: nil,
    y_orientation: nil
  },
  badge_remove_button = %{
    annotation_type_id: outline_id,
    color: "#7FBE7F",
    description: "Badge",
    font_color: nil,
    font_size: 24,
    label: "2",
    name: "Label",
    page_id: add_remove_page_id,
    size: 12,
    thickness: nil,
    x_offset: 0,
    x_orientation: "R",
    y_offset: 0,
    y_orientation: "T"
  },
  badge_username_input = %{
    annotation_type_id: badge_id,
    color: "green",
    description: "Badge",
    font_color: "white",
    font_size: 24,
    label: "1",
    name: "Label",
    page_id: login_page_id,
    size: 16,
    thickness: nil,
    x_offset: 0,
    x_orientation: "R",
    y_offset: 0,
    y_orientation: "T"
  },
  badge_password_input = %{
    annotation_type_id: badge_id,
    color: "green",
    description: "Badge",
    font_color: nil,
    font_size: 24,
    label: "2",
    name: "Label",
    page_id: login_page_id,
    size: 16,
    thickness: nil,
    x_offset: 0,
    x_orientation: "R",
    y_offset: 0,
    y_orientation: "T"
  },
  outline_login_button = %{
    annotation_type_id: outline_id,
    color: "green",
    description: "Outline Login",
    font_color: nil,
    font_size: nil,
    label: nil,
    name: "Outline Login Button",
    page_id: login_page_id,
    size: nil,
    thickness: 4,
    x_offset: nil,
    x_orientation: nil,
    y_offset: nil,
    y_orientation: nil
  },
  badge_outline_secure_button = %{
    annotation_type_id: badge_outline_id,
    color: "green",
    description: "Badge Outline Secure Button",
    font_color: "white",
    font_size: 24,
    label: "1",
    name: "Badge Outline Login",
    page_id: secure_page_id,
    size: 16,
    thickness: 4,
    x_offset: 0,
    x_orientation: "R",
    y_offset: 0,
    y_orientation: "T"
  }
]

{:ok, %Annotation{id: _add_outline_id}} =
  %Annotation{}
  |> Annotation.changeset(add_outline)
  |> Repo.insert()

{:ok, %Annotation{id: _badge_remove_button_id}} =
  %Annotation{}
  |> Annotation.changeset(badge_remove_button)
  |> Repo.insert()

{:ok, %Annotation{id: badge_username_input_id}} =
  %Annotation{}
  |> Annotation.changeset(badge_username_input)
  |> Repo.insert()

{:ok, %Annotation{id: badge_password_input_id}} =
  %Annotation{}
  |> Annotation.changeset(badge_password_input)
  |> Repo.insert()

{:ok, %Annotation{id: outline_login_button_id}} =
  %Annotation{}
  |> Annotation.changeset(outline_login_button)
  |> Repo.insert()

{:ok, %Annotation{id: badge_outline_secure_button_id}} =
  %Annotation{}
  |> Annotation.changeset(badge_outline_secure_button)
  |> Repo.insert()

_elements = [
  add_element = %{
    name: "Add Element Button",
    page_id: add_remove_page_id,
    selector: "//button[.='Add Element']",
    strategy_id: xpath_strategy_id
  },
  delete_element = %{
    name: "Delete Button",
    page_id: add_remove_page_id,
    selector: "//button[.='Delete]",
    strategy_id: xpath_strategy_id
  },
  login_button = %{
    name: "Delete Button",
    page_id: add_remove_page_id,
    selector: "//button[@type='submit']",
    strategy_id: xpath_strategy_id
  },
  login_form = %{
    name: "Login Form",
    page_id: login_page_id,
    selector: "//div[@id='content']",
    strategy_id: xpath_strategy_id
  },
  username_input = %{
    name: "username input",
    page_id: login_page_id,
    selector: "//input[@id='username']",
    strategy_id: xpath_strategy_id
  },
  password_input = %{
    name: "password input",
    page_id: login_page_id,
    selector: "//input[@id='password']",
    strategy_id: xpath_strategy_id
  },
  logout_button = %{
    name: "Logout Button",
    page_id: secure_page_id,
    selector: "//a[@href='/logout']",
    strategy_id: xpath_strategy_id
  }
]

{:ok, %Element{id: add_element_id}} =
  %Element{}
  |> Element.changeset(add_element)
  |> Repo.insert()

{:ok, %Element{id: _add_element_id}} =
  %Element{}
  |> Element.changeset(delete_element)
  |> Repo.insert()

{:ok, %Element{id: login_button_id}} =
  %Element{}
  |> Element.changeset(login_button)
  |> Repo.insert()

{:ok, %Element{id: username_input_id}} =
  %Element{}
  |> Element.changeset(username_input)
  |> Repo.insert()

{:ok, %Element{id: password_input_id}} =
  %Element{}
  |> Element.changeset(password_input)
  |> Repo.insert()

{:ok, %Element{id: logout_button_id}} =
  %Element{}
  |> Element.changeset(logout_button)
  |> Repo.insert()

{:ok, %Element{id: login_form_id}} =
  %Element{}
  |> Element.changeset(login_form)
  |> Repo.insert()

_processes = [
  add_remove_process = %{
    name: "Add and Remove Elements",
    order: 1,
    project_id: the_internet_project_id
  },
  add_process = %{
    name: "Add Process",
    order: 2,
    project_id: the_internet_project_id
  },
  test_everything = %{
    name: "Test Everything",
    order: 3,
    project_id: the_internet_project_id
  },
  failing_process = %{
    name: "Fail",
    order: 3,
    project_id: userdocs_project_id
}
]

{:ok, %Process{id: add_remove_process_id}} =
  %Process{}
  |> Process.changeset(add_remove_process)
  |> Repo.insert()

{:ok, %Process{id: _add_process_id}} =
  %Process{}
  |> Process.changeset(add_process)
  |> Repo.insert()

{:ok, %Process{id: test_everything_process_id}} =
  %Process{}
  |> Process.changeset(test_everything)
  |> Repo.insert()

{:ok, %Process{id: fail_process_id}} =
  %Process{}
  |> Process.changeset(failing_process)
  |> Repo.insert()

# Processes

steps = [
  %{
    annotation_id: nil,
    element_id: nil,
    height: nil,
    name: "Navigate to Add Remove Elements",
    order: 10,
    page_id: add_remove_page_id,
    page_reference: nil,
    process_id: add_remove_process_id,
    step_type_id: navigate_id,
    text: nil,
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: nil,
    height: 720,
    name: "Set Size",
    order: 20,
    page_id: add_remove_page_id,
    page_reference: nil,
    process_id: add_remove_process_id,
    step_type_id: set_size_explicit_id,
    text: nil,
    url: nil,
    width: 1280
  },
  %{
    annotation_id: nil,
    element_id: nil,
    height: nil,
    name: "Screenshot",
    order: 35,
    page_id: add_remove_page_id,
    page_reference: nil,
    process_id: add_remove_process_id,
    step_type_id: full_screen_screenshot_id,
    text: nil,
    url: nil,
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: nil,
    height: nil,
    name: "Clear",
    order: 37,
    page_id: add_remove_page_id,
    page_reference: nil,
    process_id: add_remove_process_id,
    step_type_id: clear_annotations_id,
    text: nil,
    url: nil,
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: add_element_id,
    height: nil,
    name: "Click Add Element",
    order: 40,
    page_id: add_remove_page_id,
    page_reference: nil,
    process_id: add_remove_process_id,
    step_type_id: click_id,
    text: nil,
    url: nil,
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: nil,
    height: nil,
    name: "Screenshot",
    order: 45,
    page_id: add_remove_page_id,
    page_reference: nil,
    process_id: add_remove_process_id,
    step_type_id: full_screen_screenshot_id,
    text: nil,
    url: nil,
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: nil,
    height: nil,
    name: "Clear",
    order: 47,
    page_id: add_remove_page_id,
    page_reference: nil,
    process_id: add_remove_process_id,
    step_type_id: clear_annotations_id,
    text: nil,
    url: nil,
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: add_element_id,
    height: nil,
    name: "Click Delete",
    order: 50,
    page_id: add_remove_page_id,
    page_reference: nil,
    process_id: add_remove_process_id,
    step_type_id: click_id,
    text: nil,
    url: nil,
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: nil,
    height: nil,
    name: "Navigate to Login Page",
    order: 10,
    page_id: login_page_id,
    page_reference: "page",
    process_id: test_everything_process_id,
    step_type_id: navigate_id,
    text: nil,
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: login_button_id,
    name: "Set size to 1280 by 768",
    order: 15,
    page_id: login_page_id,
    page_reference: "page",
    process_id: test_everything_process_id,
    step_type_id: set_size_explicit_id,
    text: nil,
    height: 768,
    width: 1280
  },
  %{
    annotation_id: badge_username_input_id,
    element_id: username_input_id,
    height: nil,
    name: "Badge Username Input",
    order: 20,
    page_id: login_page_id,
    page_reference: "page",
    process_id: test_everything_process_id,
    step_type_id: apply_annotation_id,
    text: nil,
    width: nil
  },
  %{
    annotation_id: badge_password_input_id,
    element_id: password_input_id,
    height: nil,
    name: "Badge Password Input",
    order: 25,
    page_id: login_page_id,
    page_reference: "page",
    process_id: test_everything_process_id,
    step_type_id: apply_annotation_id,
    text: nil,
    width: nil
  },
  %{
    annotation_id: outline_login_button_id,
    element_id: login_button_id,
    height: nil,
    name: "Outline Login Button",
    order: 30,
    page_id: login_page_id,
    page_reference: "page",
    process_id: test_everything_process_id,
    step_type_id: apply_annotation_id,
    text: nil,
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: username_input_id,
    height: nil,
    name: "Enter tomsmith into username",
    order: 35,
    page_id: login_page_id,
    page_reference: "page",
    process_id: test_everything_process_id,
    step_type_id: fill_field_id,
    text: "tomsmith",
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: password_input_id,
    height: nil,
    name: "Enter SuperSecretPassword! into password",
    order: 40,
    page_id: login_page_id,
    page_reference: "page",
    process_id: test_everything_process_id,
    step_type_id: fill_field_id,
    text: "SuperSecretPassword!",
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: nil,
    height: nil,
    name: "Clear",
    order: 45,
    page_id: login_page_id,
    page_reference: "page",
    process_id: test_everything_process_id,
    step_type_id: clear_annotations_id,
    text: nil,
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: nil,
    height: nil,
    name: "Full Screen Screenshot",
    order: 50,
    page_id: login_page_id,
    page_reference: "page",
    process_id: test_everything_process_id,
    step_type_id: full_screen_screenshot_id,
    text: nil,
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: login_form_id,
    height: nil,
    name: "Screenshot Login Form",
    order: 55,
    page_id: login_page_id,
    page_reference: "page",
    process_id: test_everything_process_id,
    step_type_id: element_screenshot_id,
    text: nil,
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: login_button_id,
    height: nil,
    name: "Click Login",
    order: 60,
    page_id: login_page_id,
    page_reference: "page",
    process_id: test_everything_process_id,
    step_type_id: click_id,
    text: nil,
    width: nil
  },
  %{
    annotation_id: badge_outline_secure_button_id,
    element_id: logout_button_id,
    height: nil,
    name: "Badge Outline Password Input",
    order: 65,
    page_id: secure_page_id,
    page_reference: "page",
    process_id: test_everything_process_id,
    step_type_id: apply_annotation_id,
    text: nil,
    width: nil
  },
  %{
    annotation_id: nil,
    element_id: nil,
    height: nil,
    name: "Failure",
    order: 10,
    page_id: failure_page_id,
    page_reference: nil,
    process_id: fail_process_id,
    step_type_id: navigate_id,
    text: nil,
    width: nil
  }
]

Enum.map(steps,
fn(s) ->
  {:ok, step} =
    %Step{}
    |> Step.changeset(s)
    |> Repo.insert()

  step
end)
