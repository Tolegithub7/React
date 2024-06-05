import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Program" title="What we offer" />
        <Programs />
        <About />
      </div>
      <h1>Ebusers</h1>
    </>
  );
}

export default App;
