import React, { useEffect, useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function CategoryDrinks() {
  const {
    categoryDrinks,
    setCategoryDrinks,
    setApiFilterDrinks,
    showFilter,
    setShowFilter,
    showAll,
    setShowAll,
  } = useContext(RecipesContext);
  const MAX_LENGTH = 5;

  useEffect(() => {
    const fetchDrinksCategories = async () => {
      const urlFetch = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const response = await urlFetch.json();
      const result = response.drinks;
      setCategoryDrinks(result);
    };
    fetchDrinksCategories();
  }, []);

  async function handleClick({ target }) {
    const urlFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${target.value}`);
    const response = await urlFetch.json();
    const result = response.drinks;
    setApiFilterDrinks(result);
    setShowFilter(!showFilter);
    setShowAll(!showAll);
  }

  return (
    <div>
      { categoryDrinks.map((category, index) => {
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

export default CategoryDrinks;
