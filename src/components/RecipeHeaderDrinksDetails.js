import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function RecipeHeaderDrinksDetails({ recipeDetails }) {
  const { strDrinkThumb, strDrink, strAlcoholic } = recipeDetails;
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const history = useHistory();
  const currentURL = `http://localhost:3000${history.location.pathname}`;

  return (
    <section>
      <img
        data-testid="recipe-photo"
        alt={ strDrink }
        src={ strDrinkThumb }
        width="100%"
      />
      <h1 data-testid="recipe-title">{strDrink}</h1>
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
      <button data-testid="favorite-btn" type="button">
        <img src={ whiteHeartIcon } alt="favorite" />
      </button>
      {showCopyMessage && <p>Link copiado!</p>}
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

// Referência para copiar para o clipBoard: https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
