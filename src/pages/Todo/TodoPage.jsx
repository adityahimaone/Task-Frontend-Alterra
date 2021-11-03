import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function TodoPage({ title, todos }) {
  return (
    <>
      <Header title={title} />
      {todos.map((list) => (
        <TodoList key2={list.id} todo={list} />
      ))}
    </>
  );
}
