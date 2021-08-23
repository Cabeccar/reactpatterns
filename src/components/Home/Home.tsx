import * as React from "react";

export interface Props {
  children?: React.ReactNode;
}

export interface State {}

function Home<Props>({ ...props }): JSX.Element {
  return (
    <div>
      <h1>home</h1>
      <p>This is just for demo purposes, don't use in production!!!!</p>
      {props.children}
    </div>
  );
}
export default Home;
