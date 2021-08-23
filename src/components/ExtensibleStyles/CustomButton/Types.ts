import { MouseEventHandler } from "react";

export type customButtonProps = {
    name? :string;
    type : "button" | "submit" | "reset" | undefined;
    onClick? : MouseEventHandler<HTMLButtonElement> | undefined;
    children: React.ReactNode;
    className : string; 
    style : object;  
}