import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Welcome />
    </React.Fragment>
  );
}

export default App;
