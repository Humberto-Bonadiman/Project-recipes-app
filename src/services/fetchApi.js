export const callApiMeals = async (searchInput, searchType) => {
  if (searchType === 'ingredient') {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
      .then((response) => response.json())
      .then((results) => results.meals);
  }
  if (searchType === 'name') {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then((response) => response.json())
      .then((results) => results.meals);
  }
  if (searchType === 'first-letter') {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`)
      .then((response) => response.json())
      .then((results) => results.meals);
  }
};

export const callApiDrinks = async (searchInput, searchType) => {
  if (searchType === 'ingredient') {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`)
      .then((response) => response.json())
      .then((results) => results.drinks);
  }
  if (searchType === 'name') {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then((response) => response.json())
      .then((results) => results.drinks);
  }
  if (searchType === 'first-letter') {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}`)
      .then((response) => response.json())
      .then((results) => results.drinks);
  }
};
