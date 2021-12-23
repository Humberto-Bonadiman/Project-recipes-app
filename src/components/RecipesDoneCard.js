import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

function RecipesDoneCard({ index, recipe }) {
  const {
    name,
    image,
    category,
    alcoholicOrNot,
    doneDate,
    tags = [],
    area,
    id,
    type,
  } = recipe;
  const [showCopyMessage, setShowCopyMessage] = useState((false));
  const currentURL = `http://localhost:3000/${type}s/${id}`;
  const redirectUrl = `/${type}s/${id}`;
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
        <div className="first-line-card">
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
        </div>
        <Link to={ redirectUrl }>
          <h4
            className="card-name-horizontal"
            data-testid={ `${index}-horizontal-name` }
          >
            { name }
          </h4>
        </Link>
        <h4
          className="card-date"
          data-testid={ `${index}-horizontal-done-date` }
        >
          { `Feita em: ${doneDate}` }
        </h4>
        { tags.map((tag, tagIndex) => {
          if (tagIndex < 2) {
            return (
              <span
                className="tag"
                key={ tag }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                { tag }
              </span>
            );
          }
          return null;
        })}
        {showCopyMessage && <div>Link copiado!</div>}
      </div>
    </div>
  );
}

RecipesDoneCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string,
    doneDate: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    area: PropTypes.string,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

RecipesDoneCard.defaultProps = {
  recipe: {
    alcoholicOrNot: '',
    tags: [],
    area: '',
  },
};

export default RecipesDoneCard;
