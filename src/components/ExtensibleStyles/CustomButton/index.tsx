import "../button.css";
import { customButtonProps } from "./Types";

export const CustomButton = ({
  name,
  type,
  onClick,
  children,
  className = "btn btn-primary",
  style = {},
}: customButtonProps) => {
  return (
    <button
      name={name}
      type={type}
      onClick={onClick}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
};
