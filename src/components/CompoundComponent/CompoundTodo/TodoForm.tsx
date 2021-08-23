import React, { useState, useContext } from "react";
import { SyntheticEvent } from "react";
import { TodoContext } from "./TodoContext";
import { targetValue } from "./Types";

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const { handleSubmit } = useContext(TodoContext);

  const handleInputChange = ({ target: { value } }: any) => {
    setInputValue(value);
  };

  const _handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    handleSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={_handleSubmit}>
      <label>
        New todo:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};
