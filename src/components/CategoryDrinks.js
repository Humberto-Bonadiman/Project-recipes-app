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
    filterDrinks,
    setFilterDrinks,
    setSaveIngredient,
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
  }, [setCategoryDrinks]);

  async function handleClick({ target }) {
    setSaveIngredient('');
    const urlFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${target.value}`);
    const response = await urlFetch.json();
    const result = response.drinks;
    setApiFilterDrinks(result);
    if (!filterDrinks) {
      setFilterDrinks(target.value);
    }
    if (target.value !== filterDrinks) {
      setFilterDrinks(target.value);
      setShowFilter(true);
      setShowAll(false);
    } else {
      setShowFilter(!showFilter);
      setShowAll(!showAll);
    }
  }

  return (
    <div className="btn-container">
      <button
        className="filter-btn-drinks"
        type="button"
        data-testid="All-category-filter"
        onClick={ () => {
          setShowFilter(false);
          setShowAll(true);
        } }
      >
        All
      </button>
      { categoryDrinks.map((category, index) => {
        if (index < MAX_LENGTH) {
          return (
            <button
              className="filter-btn-drinks"
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
