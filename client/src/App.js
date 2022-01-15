import React from "react";
import "./App.css";
import Cake from "./components/cake";
import TextDiv from "./components/textdiv";

export default function App() {
  return (
    <div className="Main">
      <Cake />
      <TextDiv />
    </div>
  );
}
