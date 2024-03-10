import React, { useState, useEffect } from "react";

export default function UsingUseEffect() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(50);
  useEffect(() => {
    console.log("Hello there!");
    document.title = `Count: ${count}`;
  }, []);
  return (
    <div>
      <h1> Function Based Components LifeCycle</h1>
      <div className="valueHolder">
        <h3> Count is: {count}</h3>
      </div>
      <button type="" onClick={() => setCount((count) => count + 1)}>
        Increament Count
      </button>
      <br />
      <div>
        <h3> Age is: {age}</h3>
      </div>
      <button onClick={() => setAge((age) => age + 1)}>Increament Age</button>{" "}
      <br />
    </div>
  );
}
