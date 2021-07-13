import React from "react";

export interface Props {
  children?: React.ReactNode;
}

export interface State {}

function CustomHook<Props>({ ...props }): JSX.Element {
  return <div>{props.children}</div>;
}
export default CustomHook;
