import React from 'react';
import RandomRecipe from '../Components/RandomRecipe';
import './Styles/HomePage.css';
import FavoritesPage from './FavoritesPage';

function HomePage() {
    return (
        <div className="homepage-container">
            <h1>Welcome to Recipe of the Day</h1>
            <RandomRecipe />
            <a href="/favorites" className="button">View Favorites</a>
        </div>
    );
}

export default HomePage;
