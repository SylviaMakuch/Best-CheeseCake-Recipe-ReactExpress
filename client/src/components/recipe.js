import React from "react";
import './recipe.css';
import { useState, useEffect } from "react";

export default function Recipe() {
    const [cheesecake, setCheesecake] = useState([]);
    
    useEffect(() =>{
        fetch("/api/ricottacheesecake")
        .then(res => res.json())
        .then(ingredients => setCheesecake(ingredients))
        console.log(cheesecake)
         }, []);

    return (
      <div className="recipe">
        <h3>Ingredients</h3>
        <ul>
            {cheesecake.map(({amount, ingredient}, index) =>{
                return <li key={index}>{amount}  {ingredient}</li>
            })}
        </ul>
      </div>
    );
  }