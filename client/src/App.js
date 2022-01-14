import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Ingredients from "./components/ingredients";

export default function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Ingredients />
    </div>
  );
}
