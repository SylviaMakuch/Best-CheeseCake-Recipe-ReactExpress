import React from "react";
import { useState, useEffect } from "react";
import "./ingredients.css";

export default function Ingredients() {
  const [cheesecake, setCheesecake] = useState([]);

  useEffect(() => {
    fetch("/api/ricottacheesecake")
      .then((res) => res.json())
      .then((ingredients) => setCheesecake(ingredients));
    console.log(cheesecake);
  }, []);

  return (
      <div className="Recipe">
        <h1>Ingredients</h1>
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
     
  );
}