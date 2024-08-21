import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const getRandomRecipe = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/random-recipe/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching random recipe:", error);
        throw error;
    }
};

export const getRecipeDetails = async (recipeId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/recipe/${recipeId}/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        throw error;
    }
};

export const addToFavorites = async (recipeId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/recipe/${recipeId}/favorite/`);
        return response.data;
    } catch (error) {
        console.error("Error adding recipe to favorites:", error);
        throw error;
    }
};

export const getFavorites = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/favorites/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching favorite recipes:", error);
        throw error;
    }
};
