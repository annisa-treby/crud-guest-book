import React from "react";
import logo from "./logo.svg";
import "./App.css";
import loadIcon from "./Icon/Loader";
import Content from "../src/Layout/Content"

loadIcon();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Content/>
    </div>
  );
}

export default App;
