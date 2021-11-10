import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function RecipeHeaderDrinksDetails({ recipeDetails }) {
  const { strDrinkThumb, strDrink, strAlcoholic } = recipeDetails;
  return (
    <section>
      <img
        data-testid="recipe-photo"
        alt={ strDrink }
        src={ strDrinkThumb }
        width="100%"
      />
      <h1 data-testid="recipe-title">{strDrink}</h1>
      <button data-testid="share-btn" type="button">
        <img src={ shareIcon } alt="share" />
      </button>
      <button data-testid="favorite-btn" type="button">
        <img src={ whiteHeartIcon } alt="favorite" />
      </button>
      <h2 data-testid="recipe-category">{strAlcoholic}</h2>
    </section>
  );
}
RecipeHeaderDrinksDetails.propTypes = {
  recipeDetails: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strAlcoholic: PropTypes.string,
  }).isRequired,
};

export default RecipeHeaderDrinksDetails;
