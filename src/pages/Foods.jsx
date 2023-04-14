import React, { useEffect, useState } from 'react';
import { useQueries } from 'react-query';
import FoodCard from '../components/FoodCard';

function Foods() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const queries = [
    {
      queryKey: 'categories',
      queryFn: () =>
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then((res) => res.json()),
    },
    {
      queryKey: ['meals', selectedCategory],
      queryFn: () =>
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`).then((res) =>
          res.json()
        ).then(data => data.meals),
      enabled: !!selectedCategory,
    },
    {
      queryKey: 'allMeals',
      queryFn: () =>
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((res) =>
          res.json()
        ).then(data => data.meals),
    }
  ];

  const results = useQueries(queries);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const categories = results[0].data?.meals;
  const meals = results[1].data;
  const allMeals = results[2].data;

  useEffect(() => {
    results[2].refetch();
  }, [results]);

  if (results.some((result) => result.isLoading)) return <div>Loading...</div>;

  return (
    <div>
      <h1>Categories</h1>
      {categories && categories.map((category,index) => (
        <button
          key={index}
          value={category.strCategory}
          onClick={handleCategoryChange}
        >
          {category.strCategory}
        </button>
      ))}

      {selectedCategory ? meals && <FoodCard allMeals={meals} /> : <FoodCard allMeals={allMeals} />}

    </div>
  );
}

export default Foods;
