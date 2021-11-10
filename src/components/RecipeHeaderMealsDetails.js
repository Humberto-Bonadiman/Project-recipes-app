import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function RecipeHeaderMealsDetails({ recipeDetails }) {
  const { strMealThumb, strMeal, strCategory } = recipeDetails;
  return (
    <section>
      <img
        data-testid="recipe-photo"
        alt={ strMeal }
        src={ strMealThumb }
        width="100%"
      />
      <h1 data-testid="recipe-title">{strMeal}</h1>
      <button data-testid="share-btn" type="button">
        <img src={ shareIcon } alt="share" />
      </button>
      <button data-testid="favorite-btn" type="button">
        <img src={ whiteHeartIcon } alt="favorite" />
      </button>
      <h2 data-testid="recipe-category">{strCategory}</h2>
    </section>
  );
}
RecipeHeaderMealsDetails.propTypes = {
  recipeDetails: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
  }).isRequired,
};

export default RecipeHeaderMealsDetails;
