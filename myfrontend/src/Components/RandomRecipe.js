import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function RandomRecipe() {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/random-recipe/')
            .then(response => {
                setRecipe(response.data);
            });
    }, []);

    return (
        <div className="App">
            {recipe ? (
                <div className="recipe-card">
                    <h2>{recipe.title}</h2>
                    <p>{recipe.description}</p>
                    <a href={`/recipe/${recipe.id}`} className="button">Explore Details</a>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default RandomRecipe;
