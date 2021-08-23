import React from "react";
import { CustomButton } from "./CustomButton";
import { Button } from "./NormalButton";

export const ExtensibleStyles = () => (
  <>
    <h2>No Extensible Styles</h2>
    <br />
    <Button type="button">Click</Button>
    <br />
    <br />
    <hr />
    <br />

    <h2>Extensible Styles</h2>
    <p>Using props we can extend the styles</p>
    <br />
    <CustomButton
      className="btn btn-success"
      type="button"
      style={{ color: "#ff0000" }}
    >
      Click
    </CustomButton>
  </>
);
export default ExtensibleStyles;
