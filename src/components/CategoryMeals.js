import React, { useEffect, useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function CategoryMeals() {
  const {
    categoryMeals,
    setCategoryMeals,
    setApiFilterMeals,
    showFilter,
    setShowFilter,
    showAll,
    setShowAll,
    filterMeals,
    setFilterMeals,
  } = useContext(RecipesContext);
  const MAX_LENGTH = 5;

  useEffect(() => {
    const fetchMealsCategories = async () => {
      const urlFetch = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const response = await urlFetch.json();
      const result = response.meals;
      setCategoryMeals(result);
    };
    fetchMealsCategories();
  }, []);

  async function handleClick({ target }) {
    const urlFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${target.value}`);
    const response = await urlFetch.json();
    const result = response.meals;
    setApiFilterMeals(result);
    if (!filterMeals) {
      setFilterMeals(target.value);
    }
    if (target.value !== filterMeals) {
      setFilterMeals(target.value);
      setShowFilter(true);
      setShowAll(false);
    } else {
      setShowFilter(!showFilter);
      setShowAll(!showAll);
    }
  }

  return (
    <div>
      { categoryMeals.map((category, index) => {
        if (index < MAX_LENGTH) {
          return (
            <button
              type="button"
              key={ index }
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ (event) => handleClick(event) }
              value={ category.strCategory }
            >
              {category.strCategory}
            </button>
          );
        }
        return null;
      }) }
    </div>
  );
}

export default CategoryMeals;
