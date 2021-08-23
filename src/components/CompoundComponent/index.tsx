import React from "react";
import { CompoundTodo, TodoTitle, TodoForm, TodoList } from "./CompoundTodo";
import { Todo } from "./NormalTodo";

export default function CompoundComponent(): JSX.Element {
  return (
    <>
      <h2>No Compound Component</h2>
      <p>Todo list is all in a single component</p>
      <Todo title="Todo List" />

      <br />
      <h2> Compound Component</h2>
      <p>
        We split all with reusable components that can be rearranged without
        needing to at more styles, we only need to change the subcomponents
        order.
      </p>
      <CompoundTodo>
        <TodoTitle>
          <h2>Todo List </h2>
        </TodoTitle>
        <TodoForm />
        <TodoList />
      </CompoundTodo>
    </>
  );
}
