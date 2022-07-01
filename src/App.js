import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Welcome />
      <Contact />
      <Hero />
      <About />
      <Experience />
    </React.Fragment>
  );
}

export default App;
