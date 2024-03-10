import "./App.css";
import CounterUsingState from "./Components/UseState/CounterUsingState";
import CounterIncrement from "./Components/UseState/CounterIncrement";
import UsingUseEffect from "./Components/UseEffect/UsingUseEffect";
import LogInLogOut from "./Components/UseEffect/LogInLogOut";
function App() {
  return (
    <div className="App">
      <h3>React Hooks</h3>
      <CounterUsingState />
      <CounterIncrement />
      <UsingUseEffect />
      <LogInLogOut />
    </div>
  );
}

export default App;
