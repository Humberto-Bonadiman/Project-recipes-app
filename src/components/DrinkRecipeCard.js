import React from 'react';
import PropTypes from 'prop-types';

function DrinkRecipeCard({ recipe, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        data-testid={ `${index}-card-img` }
        src={ recipe.strDrinkThumb }
        alt={ recipe.strDrink }
      />
      <h4 data-testid={ `${index}-card-name` }>{recipe.strDrink}</h4>
    </div>
  );
}

DrinkRecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default DrinkRecipeCard;
