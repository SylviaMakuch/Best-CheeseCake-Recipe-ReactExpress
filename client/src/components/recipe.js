import React from "react";
import './recipe.css';
import { useState, useEffect } from "react";

export default function Recipe() {
    const [cheesecake, setCheesecake] = useState([]);
    
    useEffect(() =>{
        fetch("/api/ricottacheesecake")
        .then(res => res.json())
        .then(cheesecake => setCheesecake(cheesecake))
        console.log(cheesecake)
         }, []);

    return (
      <div className="recipe">
        <h2></h2>
        <ul>
            {cheesecake.map(cheescake => {
                return <li key={cheesecake.id}> {cheesecake.amount} {cheesecake.ingredient}</li>
            }
                )}
        </ul>
      </div>
    );
  }