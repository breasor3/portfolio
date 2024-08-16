import React, { useState } from 'react';
import './RecipeFinder.css';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
}

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

const RecipeFinder: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [mealName, setMealName] = useState('');
  const [ingredient, setIngredient] = useState('');

  const searchMealsByName = async (name: string) => {
    const response = await fetch(`${API_BASE_URL}search.php?s=${name}`);
    const data = await response.json();
    setMeals(data.meals || []);
  };

  const searchMealsByIngredient = async (ing: string) => {
    const response = await fetch(`${API_BASE_URL}filter.php?i=${ing}`);
    const data = await response.json();
    if (data.meals) {
      const detailedMeals = await Promise.all(
        data.meals.map(async (meal: { idMeal: string }) => {
          const detailResponse = await fetch(`${API_BASE_URL}lookup.php?i=${meal.idMeal}`);
          const detailData = await detailResponse.json();
          return detailData.meals[0];
        })
      );
      setMeals(detailedMeals);
    } else {
      setMeals([]);
    }
  };

  const getRandomMeal = async () => {
    const response = await fetch(`${API_BASE_URL}random.php`);
    const data = await response.json();
    setMeals(data.meals || []);
  };

  const handleSearch = () => {
    if (mealName) {
      searchMealsByName(mealName);
    } else if (ingredient) {
      searchMealsByIngredient(ingredient);
    } else {
      alert('Please enter a meal name or an ingredient.');
    }
  };

  return (
    <div className="recipe-finder">
      <h1>Recipe Finder</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter meal name"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        />
        <input
          type="text"
          className="search-input"
          placeholder="Enter ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={getRandomMeal}>Get Random Meal</button>
      </div>
      <div className="meal-container">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="meal-content">
              <h2>{meal.strMeal}</h2>
              <p>Category: {meal.strCategory}</p>
              <p>Area: {meal.strArea}</p>
              <h3>Instructions:</h3>
              <p>{meal.strInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeFinder;
export {};