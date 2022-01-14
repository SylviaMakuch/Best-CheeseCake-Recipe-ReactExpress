import React from "react";
import "./recipe.css";
import { useState, useEffect } from "react";

export default function Recipe() {
  const [cheesecake, setCheesecake] = useState([]);

  useEffect(() => {
    fetch("/api/ricottacheesecake")
      .then((res) => res.json())
      .then((ingredients) => setCheesecake(ingredients));
    console.log(cheesecake);
  }, []);

  return (
    <div className="main">
      <div className="recipe">
        <h1>Ricotta Cheescake Recipe</h1>
        <h4>Ingredients</h4>
        <ul>
          {cheesecake.map(({ amount, ingredient }, index) => {
            return (
              <li key={index}>
                {amount} {ingredient}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="instructions">
        <h4>Instructions</h4>
        <p>
          Bake at 325°F for 50 mins with a steel pan or bit longer with glass
        </p>
        <p>How to know if ready? make sure the middle is not liquid</p>
      </div>
    </div>
  );
}
