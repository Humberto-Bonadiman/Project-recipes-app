import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

function FinishRecipeButton({ recipeDetails, ingredientsUsed }) {
  const history = useHistory();
  const type = history.location.pathname.includes('comidas')
    ? 'comida' : 'bebida';
  const {
    idMeal,
    strMeal,
    strArea,
    strCategory,
    strMealThumb,
    strTags,
    idDrink,
    strDrink,
    strDrinkThumb,
    strAlcoholic,
  } = recipeDetails;

  let id = '';
  let name = '';
  let image = '';
  if (type === 'comida') {
    id = idMeal;
    name = strMeal;
    image = strMealThumb;
  } else {
    id = idDrink;
    name = strDrink;
    image = strDrinkThumb;
  }
  const newDate = new Date();
  const thisDay = newDate.getDate();
  const thisMonth = newDate.getMonth();
  const thisYear = newDate.getFullYear();
  const thisDate = `${thisDay}/${thisMonth}/${thisYear}`;
  const recipeInfo = {
    id,
    type,
    area: strArea || '',
    category: strCategory,
    alcoholicOrNot: strAlcoholic || '',
    name,
    image,
    doneDate: thisDate,
    tags: strTags.split(',') || [],
  };

  const handleClick = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    if (doneRecipes.length === 0) {
      localStorage.setItem('doneRecipes', JSON.stringify([]));
    }
    localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipes, recipeInfo]));
    history.push('/receitas-feitas');
  };

  const ingredients = Object.entries(recipeDetails)
    .filter((entry) => entry[0].includes('strIngredient'))
    .filter((entry) => entry[1]);

  return (
    <button
      data-testid="finish-recipe-btn"
      type="button"
      className="finish-recipe-btn"
      onClick={ () => handleClick() }
      disabled={ ingredients.length !== ingredientsUsed.length }
    >
      Finalizar Receita
    </button>
  );
}

FinishRecipeButton.propTypes = {
  recipeDetails: PropTypes.objectOf(PropTypes.string),
  ingredientsUsed: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default FinishRecipeButton;

/* Referência para new Date()
  Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate */
