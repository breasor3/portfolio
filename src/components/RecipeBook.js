// API base URL and key
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
const API_KEY = '1'; // This is the free API URL

// Function to search meals by name
function searchMealsByName(mealName) {
    fetch(`${API_BASE_URL}search.php?s=${mealName}`)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))
        .catch(error => console.error('Error:', error));
}

// Function to get a random meal
function getRandomMeal() {
    fetch(`${API_BASE_URL}random.php`)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))
        .catch(error => console.error('Error:', error));
}

// Function to display meals
function displayMeals(meals) {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';

    if (meals) {
        meals.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.classList.add('meal');
            mealDiv.innerHTML = `
                <img src="${meal.strMealThumb}/preview" alt="${meal.strMeal}">
                <div class="meal-content">
                    <h2>${meal.strMeal}</h2>
                    <p>Category: ${meal.strCategory}</p>
                    <p>Area: ${meal.strArea}</p>
                    <h3>Instructions:</h3>
                    <p>${meal.strInstructions}</p>
                </div>
            `;
            mealContainer.appendChild(mealDiv);
        });
    } else {
        mealContainer.innerHTML = '<p>No meals found</p>';
    }
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const randomButton = document.getElementById('random-button');
    const searchInput = document.getElementById('search-input');

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            searchMealsByName(searchInput.value);
        });
    }

    if (randomButton) {
        randomButton.addEventListener('click', getRandomMeal);
    }
});

// Function to search meals by ingredient
function searchMealsByIngredient(ingredient) {
    fetch(`${API_BASE_URL}filter.php?i=${ingredient}`)
        .then(response => response.json())
        .then(data => {
            if (data.meals) {
                // We need to fetch full details for each meal
                return Promise.all(data.meals.map(meal => 
                    fetch(`${API_BASE_URL}lookup.php?i=${meal.idMeal}`)
                        .then(response => response.json())
                        .then(mealData => mealData.meals[0])
                ));
            } else {
                return [];
            }
        })
        .then(meals => displayMeals(meals))
        .catch(error => console.error('Error:', error));
}

// Updated search function to handle both meal name and ingredient
function searchMeals() {
    const mealName = document.getElementById('meal-search-input').value;
    const ingredient = document.getElementById('ingredient-search-input').value;

    if (mealName) {
        searchMealsByName(mealName);
    } else if (ingredient) {
        searchMealsByIngredient(ingredient);
    } else {
        alert('Please enter a meal name or an ingredient.');
    }
}