import { createContext } from "react";
import { targetValue, Tprovider } from "./Types";

const defaultProviderValues: Tprovider = {
  handleSubmit: (target: targetValue) => {},
  toogleTodo: (e: React.ChangeEvent<HTMLInputElement>) => {},
  getTodoValues: () => {},
};

export const TodoContext = createContext(defaultProviderValues);
export const { Provider } = TodoContext;
