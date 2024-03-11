import React from "react";
import { myContext } from "../../App";

export default function Component3() {
  return (
    <div>
      <myContext.Consumer>
        {(x) => {
          console.log(x);
          return (
            <div>
              <h1>Hello from Component3</h1>
              <h2>
                {" "}
                Using myContext Consumer: <span className="red">{x}</span>
              </h2>
            </div>
          );
        }}
      </myContext.Consumer>
    </div>
  );
}
