import React, { useContext } from "react";
import { myContext } from "../../App";

export default function UsingUseContext() {
  const exampleContext = useContext(myContext);
  return (
    <div>
      <br />
      <hr />
      <hr />
      <h1>Using Use Context</h1>
      <h2>Example {exampleContext}</h2>
    </div>
  );
}
