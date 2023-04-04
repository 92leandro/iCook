import React, { useState } from 'react'
import { useQueries } from 'react-query';
import FoodCard from "../components/FoodCard";

function Foods() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const queries = [
    {
      queryKey: 'categories',
      queryFn: () => fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then((res) => res.json())
    },
    {
      queryKey: 'meals',
      queryFn: () =>
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`).then((res) =>
          res.json()
        )
    }
  ];

  const results = useQueries(queries);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value || null);
  };

  if (results.some((result) => result.isLoading)) return <div>Loading...</div>;

  const categories = results[0].data?.meals;
  const meals = results[1].data?.meals;

  return (
    <div>
      <h1>Categories</h1>

      {categories && categories.map((category) => (
        <button key={category.strCategory} value={category.strCategory} onClick={handleCategoryChange}>
          {category.strCategory}
        </button>
      ))}

       <FoodCard cards={meals} />
       {console.log(meals)}
    </div>
  );
}

export default Foods;
