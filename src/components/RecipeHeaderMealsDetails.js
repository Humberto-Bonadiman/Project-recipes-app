import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function RecipeHeaderMealsDetails({ recipeDetails }) {
  const { strMealThumb, strMeal, strCategory, idMeal } = recipeDetails;
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [favorited, setFavorited] = useState(whiteHeartIcon);
  const history = useHistory();
  const currentURL = `http://localhost:3000${history.location.pathname}`;

  useEffect(() => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    return favoriteRecipes.some((recipe) => recipe.id === idMeal)
      ? setFavorited(blackHeartIcon) : setFavorited(whiteHeartIcon);
  }, [idMeal, favorited]);

  return (
    <section>
      <img
        data-testid="recipe-photo"
        alt={ strMeal }
        src={ strMealThumb }
        width="100%"
      />
      <h1 data-testid="recipe-title">{strMeal}</h1>
      <button
        data-testid="share-btn"
        type="button"
        onClick={ () => {
          navigator.clipboard.writeText(currentURL);
          setShowCopyMessage(true);
        } }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      <button data-testid="favorite-btn" type="button" src={ favorited }>
        <img src={ favorited } alt="favorite" />
      </button>
      {showCopyMessage && <p>Link copiado!</p>}
      <h2 data-testid="recipe-category">{strCategory}</h2>
    </section>
  );
}
RecipeHeaderMealsDetails.propTypes = {
  recipeDetails: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
};

export default RecipeHeaderMealsDetails;

// Referência para copiar para o clipBoard: https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
