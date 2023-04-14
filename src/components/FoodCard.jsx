import React from 'react';
import "../styles/food.css"


function FoodCard({ allMeals }) {
  return (
    <div>
      <h2>All Meals</h2>
      <ul>
        {allMeals.map((meal) => (
          <li key={meal.idMeal}>
            <img
              className="food-img"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <span>{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodCard;
