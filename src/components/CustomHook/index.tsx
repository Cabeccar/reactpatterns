import React from "react";
import { CustomHookApiCall } from "./CustomHookApiCall";
import { NormalApiCall } from "./NormalApiCall";

const CustomHook = () => (
  <>
    <h2>Custom Hooks</h2>
    <br />
    <br />
    <hr />
    <br />
    <h3>No Custom Hook</h3>
    <p>This example loads data from an API with a common component </p>
    <br />
    <NormalApiCall />
    <hr />
    <br />
    <h3>With Custom Hook</h3>
    <p>
      This example loads data from an API using "useFetch" hook inside a
      component{" "}
    </p>
    <br />
    <CustomHookApiCall />
    <hr />
  </>
);

export default CustomHook;
