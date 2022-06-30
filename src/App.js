import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Welcome />
      <Hero />
      <About />
    </React.Fragment>
  );
}

export default App;
