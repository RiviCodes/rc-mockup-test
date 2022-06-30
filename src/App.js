import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Welcome />
      <AboutUs />
    </React.Fragment>
  );
}

export default App;
