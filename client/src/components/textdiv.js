import React from "react";
import Ingredients from "./ingredients";
import Instructions from "./instructions";
import "./textdiv.css";

export default function TextDiv() {
    return (
      <div className="Textdiv">
            <Ingredients />
            <Instructions />
      </div>
    );
  }
  