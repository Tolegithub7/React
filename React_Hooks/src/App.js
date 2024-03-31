import "./App.css";
// import React, {useState} from "react";
// import { createContext } from "react";
// import Component1 from "./Components/UseContext/Component1";

// import CounterUsingState from "./Components/UseState/CounterUsingState";
import CounterIncrement from "./Components/UseState/CounterIncrement";
// import UsingUseEffect from "./Components/UseEffect/UsingUseEffect";
// import LogInLogOut from "./Components/UseEffect/LogInLogOut";

// export const myContext = createContext();
// console.log(myContext);
function App() {
  return (
    <div className="App">
      <div>
        {/* <myContext.Provider value="I'm Tole">
          <Component1 />
        </myContext.Provider> */}
        <CounterIncrement />
      </div>
      <h3>React Hooks</h3>
      {/* <CounterUsingState />
      <CounterIncrement />
      <UsingUseEffect />
      <LogInLogOut /> */}
    </div>
  );
}

export default App;
