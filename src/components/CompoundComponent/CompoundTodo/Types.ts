export type todoItem = {
  name: string;
  isDone: boolean;
};

export type targetValue = {
  target: todoItem;
};

export type Tprovider = {
  handleSubmit: Function;
  toogleTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getTodoValues: Function;
};
