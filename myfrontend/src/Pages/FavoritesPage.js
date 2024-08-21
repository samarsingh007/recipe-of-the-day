import React, { useState, useEffect } from 'react';
import { getFavorites } from '../Services/api';
import './Styles/FavoritesPage.css'; 

function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getFavorites().then(data => {
            setFavorites(data);
        }).catch(error => {
            console.error("Error fetching favorite recipes:", error);
        });
    }, []);

    return (
        <div className="App">
            <h1>Your Favorite Recipes</h1>
            {favorites.length > 0 ? (
                <div className="favorites-list">
                    {favorites.map(recipe => (
                        <div key={recipe.id} className="recipe-card">
                            <h2>{recipe.title}</h2>
                            <p>{recipe.description}</p>
                            <p>Favorited: {recipe.favorite_count} times</p>
                            <a href={`/recipe/${recipe.id}`} className="button">View Details</a>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No favorite recipes yet. Start adding some!</p>
            )}
            <a href="/" className="back-button">Back to Home</a>
        </div>
    );
}

export default FavoritesPage;
