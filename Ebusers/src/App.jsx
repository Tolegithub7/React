import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Program" title="What we offer" />
        <Programs />
        <About />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subtitle="TESTIMONIALS" title="What student said" />
      </div>
      <h1>Ebusers</h1>
    </>
  );
}

export default App;
