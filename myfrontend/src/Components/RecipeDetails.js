import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Styles/RecipeDetails.css';
import { addToFavorites } from '../Services/api';

function RecipeDetails() {
    const [recipe, setRecipe] = useState(null);
    const { recipe_id } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/recipe/${recipe_id}/`)
            .then(response => {
                setRecipe(response.data);
            });
    }, [recipe_id]);

    const handleAddToFavorites = () => {
        addToFavorites(recipe_id).then(response => {
            alert(response.message);
        }).catch(error => {
            console.error("Error adding to favorites:", error);
        });
    };

    return (
        <div className="App">
            {recipe ? (
                <div className="recipe-details">
                    <h2>{recipe.title}</h2>
                    <h3>Ingredients</h3>
                    <p>{recipe.ingredients}</p>
                    <h3>Instructions</h3>
                    <p>{recipe.instructions}</p>
                    <button onClick={handleAddToFavorites} className="button">Add to Favorites</button>
                    <a href="/" className="back-button">Back to Home</a>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default RecipeDetails;
