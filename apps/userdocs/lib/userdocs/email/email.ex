defmodule Userdocs.Email do
  @moduledoc false
  import Bamboo.Email
  use Bamboo.Template

  def confirmation_email(%{to: address, subject: subject, text: text, html: html}) do
    new_email()
    |> from("welcome@user-docs.com")
    |> subject(subject)
    |> html_body(html)
    |> text_body(text)
    |> to(address)
  end

  def cast_onboarding(%{user: user, invited_by: invited_by, url: url}) do
    %{
      to: user.email,
      subject: invited_by.email <> " has invited you to join Userdocs!",
      assigns: %{
        url: url,
        invited_by_email: invited_by.email
      }
    }
  end

  def onboarding(%{to: address, subject: subject, assigns: %{invited_by_email: email, url: url}}) do
    new_email()
    |> from("welcome@user-docs.com")
    |> subject(subject)
    |> to(address)
    |> put_view(Userdocs.EmailView)
    |> render(:invitation, %{invited_by_email: email, url: url})
  end

  def send(email) do
    Userdocs.Mailer.deliver_later(email)
  end
end
