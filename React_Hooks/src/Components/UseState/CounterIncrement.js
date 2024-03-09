import React, { useState } from "react";
import "./Counter.css";

function CounterIncrement() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <button
        type="button"
        className="RiseUp"
        onClick={() => setCount((count) => count + 1)}
      >
        RiseUP
      </button>
      <button
        type="button"
        className="GetDown"
        onClick={() => setCount((count) => count - 1)}
      >
        GetDown
      </button>
      <button type="button" className="Reset" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default CounterIncrement;
