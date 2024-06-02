import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Programs />
      </div>
      <h1>Ebusers</h1>
    </>
  );
}

export default App;
