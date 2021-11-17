import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

function FinishRecipeButton({ recipeDetails, ingredientsUsed }) {
  const history = useHistory();

  const ingredients = Object.entries(recipeDetails)
    .filter((entry) => entry[0].includes('strIngredient'))
    .filter((entry) => entry[1]);

  return (
    <button
      data-testid="finish-recipe-btn"
      type="button"
      className="finish-recipe-btn"
      onClick={ () => history.push('/receitas-feitas') }
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
