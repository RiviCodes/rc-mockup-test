import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Hero from "./components/Hero";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Welcome />
      <Hero />
    </React.Fragment>
  );
}

export default App;
