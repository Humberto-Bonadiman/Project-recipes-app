import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MealRecipeCard({ recipe, index }) {
  return (
    <Link
      className="recipe-card"
      data-testid={ `${index}-recipe-card` }
      to={ `/comidas/${recipe.idMeal}` }
    >
      <img
        className="card-img"
        data-testid={ `${index}-card-img` }
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
      />
      <h4
        className="card-name"
        data-testid={ `${index}-card-name` }
      >
        {recipe.strMeal}
      </h4>
    </Link>
  );
}

MealRecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default MealRecipeCard;
