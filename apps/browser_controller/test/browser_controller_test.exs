defmodule BrowserControllerTest do
  use ExUnit.Case
  doctest BrowserController

  test "greets the world" do
    assert BrowserController.hello() == :world
  end
end
