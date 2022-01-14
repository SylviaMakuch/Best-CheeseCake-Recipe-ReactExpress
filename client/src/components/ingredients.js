import React from "react";
import { useState, useEffect } from "react";

export default function Ingredients() {
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
      </div>
     );
}
