defmodule Userdocs.RepoHandler do
  @moduledoc "Used for executing appropriate repo calls on a repo passed in as an argument"
  def all(query,  %{context: %{repo: repo}}) do
    repo.all(query)
  end

  def get(schema, id, %{context: %{repo: repo}}) do
    repo.get(schema, id)
  end

  def get!(schema, id, %{context: %{repo: repo}}) do
    repo.get!(schema, id)
  end

  def one!(query, %{context: %{repo: repo}}) do
    repo.one!(query)
  end

  def one(query, %{context: %{repo: repo}}) do
    repo.one(query)
  end

  def update(query, %{context: %{repo: repo}}) do
    repo.update(query)
  end

  def insert(changeset, %{context: %{repo: repo}}) do
    repo.insert(changeset)
  end

  def delete(object, %{context: %{repo: repo}}) do
    repo.delete(object)
  end

  def delete_all(schema, %{context: %{repo: repo}}) do
    repo.delete_all(schema)
  end
end
