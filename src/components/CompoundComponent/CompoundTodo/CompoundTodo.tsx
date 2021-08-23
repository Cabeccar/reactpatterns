import * as React from "react";
import { useState } from "react";
import { Provider } from "./TodoContext";
import { targetValue } from "./Types";

export const CompoundTodo = ({ ...props }) => {
  const [listTodos, setListTodos] = useState<any>({});

  const handleSubmit: Function = (inputValue: string) => {
    setListTodos({
      ...listTodos,
      [inputValue]: { name: inputValue, isDone: false },
    });
  };

  const toogleTodo = ({
    target: { name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setListTodos({
      ...listTodos,
      [name]: {
        ...listTodos[name],
        isDone: !listTodos[name].isDone,
      },
    });
  };

  const getTodoValues: Function = () => Object.values(listTodos);

  const valuesProvider = {
    handleSubmit,
    toogleTodo,
    getTodoValues,
  };

  return (
    <div
      style={{
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        borderRadius: "5px",
        padding: "8px",
      }}
    >
      <Provider value={valuesProvider}>{props.children}</Provider>
    </div>
  );
};
