import "./App.css";
import CounterUsingState from "./Components/UseState/CounterUsingState";
import CounterIncrement from "./Components/UseState/CounterIncrement";
function App() {
  return (
    <div className="App">
      <h3>React Hooks</h3>
      <CounterUsingState />
      <CounterIncrement />
    </div>
  );
}

export default App;
