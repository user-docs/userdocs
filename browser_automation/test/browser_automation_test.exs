defmodule BrowserAutomationTest do
  use ExUnit.Case
  doctest BrowserAutomation

  test "greets the world" do
    assert BrowserAutomation.hello() == :world
  end
end
