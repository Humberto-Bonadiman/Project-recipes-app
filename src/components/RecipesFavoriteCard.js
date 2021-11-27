import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function RecipesFavoriteCard({ index, recipe, setToggleFavorite, toggleFavorite }) {
  const {
    name,
    image,
    category,
    alcoholicOrNot,
    area,
    id,
    type,
  } = recipe;
  const [showCopyMessage, setShowCopyMessage] = useState((false));
  const currentURL = `http://localhost:3000/${type}s/${id}`;
  const redirectUrl = `/${type}s/${id}`;
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

  const handleFavorite = () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes
      .filter((favRecipe) => favRecipe.id !== id)));
    setToggleFavorite(!toggleFavorite);
  };

  const ONE_SECOND = 1000;
  return (
    <div className="recipe-horizontal-card">
      <Link className="card-left-side" to={ redirectUrl }>
        <img
          className="card-img"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
        />
      </Link>
      <div className="card-right-side">
        { type === 'comida'
          ? (
            <h4
              className="card-category"
              data-testid={ `${index}-horizontal-top-text` }
            >
              { `${area} - ${category}` }
            </h4>
          )
          : (
            <h4
              className="card-category"
              data-testid={ `${index}-horizontal-top-text` }
            >
              { alcoholicOrNot }
            </h4>
          )}
        <Link to={ redirectUrl }>
          <h4
            className="card-name-horizontal"
            data-testid={ `${index}-horizontal-name` }
          >
            { name }
          </h4>
        </Link>
        <div className="btns-horizontal">
          <button
            className="share-btn-horizontal"
            data-testid={ `${index}-horizontal-share-btn` }
            type="button"
            src={ shareIcon }
            onClick={ () => {
              window.navigator.clipboard.writeText(currentURL);
              setShowCopyMessage(true);
              setTimeout(() => setShowCopyMessage(false), ONE_SECOND);
            } }
          >
            <img src={ shareIcon } alt="share" />
          </button>
          <button
            className="favorite-btn-horizontal"
            data-testid={ `${index}-horizontal-favorite-btn` }
            type="button"
            src={ blackHeartIcon }
            onClick={ handleFavorite }
          >
            <img src={ blackHeartIcon } alt="favorite" />
          </button>
        </div>
        {showCopyMessage && <div>Link copiado!</div>}
      </div>
    </div>
  );
}

RecipesFavoriteCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string,
    area: PropTypes.string,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
  setToggleFavorite: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.bool.isRequired,
};

RecipesFavoriteCard.defaultProps = {
  recipe: {
    alcoholicOrNot: '',
    area: '',
  },
};

export default RecipesFavoriteCard;
