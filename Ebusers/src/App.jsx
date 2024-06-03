import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Title />
      <div className="container">
        <Programs />
      </div>
      <h1>Ebusers</h1>
    </>
  );
}

export default App;
