import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function RecipeHeaderMealsDetails({ recipeDetails }) {
  const { strMealThumb, strMeal, strCategory, idMeal, strArea } = recipeDetails;
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [toggleFavorite, setToggleFavorite] = useState();
  const history = useHistory();
  const currentURL = `http://localhost:3000${history.location.pathname.replace('/in-progress', '')}`;
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const heartColor = favoriteRecipes.some((recipe) => recipe.id === idMeal)
    ? blackHeartIcon : whiteHeartIcon;

  const handleFavorite = () => {
    if (!(favoriteRecipes.some((recipe) => recipe.id === idMeal))) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteRecipes, {
        id: idMeal,
        type: 'comida',
        area: strArea,
        category: strCategory,
        name: strMeal,
        alcoholicOrNot: '',
        image: strMealThumb,
      }]));
    } else {
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes
        .filter((recipe) => recipe.id !== idMeal)));
    }
    setToggleFavorite(!toggleFavorite);
  };

  const ONE_SECOND = 1000;
  return (
    <section className="recipe-details-header">
      <img
        className="recipe-photo"
        data-testid="recipe-photo"
        alt={ strMeal }
        src={ strMealThumb }
        width="100%"
      />
      <div className="details-header">
        <div className="title-container">
          <h1
            className="recipe-title"
            data-testid="recipe-title"
          >
            {strMeal}
          </h1>
          <h2
            className="recipe-category"
            data-testid="recipe-category"
          >
            {strCategory}
          </h2>
        </div>
        <div className="btns-container">
          <button
            className="share-btn"
            data-testid="share-btn"
            type="button"
            onClick={ () => {
              window.navigator.clipboard.writeText(currentURL);
              setShowCopyMessage(true);
              setTimeout(() => setShowCopyMessage(false), ONE_SECOND);
            } }
          >
            <img src={ shareIcon } alt="share" />
          </button>
          <button
            className="favorite-btn"
            data-testid="favorite-btn"
            type="button"
            src={ heartColor }
            onClick={ handleFavorite }
          >
            <img src={ heartColor } alt="favorite" />
          </button>
          {showCopyMessage && <div>Link copiado!</div>}
        </div>
      </div>
    </section>
  );
}
RecipeHeaderMealsDetails.propTypes = {
  recipeDetails: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    idMeal: PropTypes.string,
    strArea: PropTypes.string,
  }).isRequired,
};

export default RecipeHeaderMealsDetails;

// Referência para copiar para o clipBoard: https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
