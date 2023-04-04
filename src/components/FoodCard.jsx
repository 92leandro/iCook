import React from 'react';

function FoodCard({ cards }) {
  return (
    <div className="foodsGrid">
      {
        cards.length > 0 && cards.map(({ strMealThumb, strMeal }) => (
          <button
            className="foodsBtn"
            key={ strMeal }
            
            type="button"
          >
            <img
              className="foodsImg"
              src={ strMealThumb }
              alt={ strMeal }
            />
          </button>
        ))
      }
    </div>
  )
};

export default FoodCard;
