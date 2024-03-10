import "./App.css";
import CounterUsingState from "./Components/UseState/CounterUsingState";
import CounterIncrement from "./Components/UseState/CounterIncrement";
import UsingUseEffect from "./Components/UseEffect/UsingUseEffect";
function App() {
  return (
    <div className="App">
      <h3>React Hooks</h3>
      <CounterUsingState />
      <CounterIncrement />
      <UsingUseEffect />
    </div>
  );
}

export default App;
