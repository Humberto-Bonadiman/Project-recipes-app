import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import shareIcon from '../images/shareIcon.svg';

function RecipesDoneCard({ index, recipe }) {
  const {
    name,
    image,
    category,
    alcoholicOrNot,
    doneDate,
    tags,
    area,
    id,
    type,
  } = recipe;
  const [showCopyMessage, setShowCopyMessage] = useState((false));
  const history = useHistory();
  console.log(history);
  const currentURL = `http://localhost:3000/${type}s/${id}`;
  return (
    <div>
      <img
        className="card-img"
        data-testid={ `${index}-horizontal-image` }
        src={ image }
        alt={ name }
      />
      { type === 'comida'
        ? (
          <h4
            className="card-name"
            data-testid={ `${index}-horizontal-top-text` }
          >
            { `${area} - ${category}` }
          </h4>
        )
        : (
          <h4
            className="card-name"
            data-testid={ `${index}-horizontal-top-text` }
          >
            { alcoholicOrNot }
          </h4>
        )}
      <h4
        className="card-name"
        data-testid={ `${index}-horizontal-name` }
      >
        { name }
      </h4>
      <h4
        className="card-name"
        data-testid={ `${index}-horizontal-done-date` }
      >
        { doneDate }
      </h4>
      <button
        data-testid={ `${index}-horizontal-share-btn` }
        type="button"
        src={ shareIcon }
        onClick={ () => {
          window.navigator.clipboard.writeText(currentURL);
          setShowCopyMessage(true);
        } }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      {showCopyMessage && <p>Link copiado!</p>}
      { tags.map((tag) => (
        <span
          key={ tag }
          data-testid={ `${index}-${tag}-horizontal-tag` }
        >
          { tag }
        </span>
      ))}
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
    tags: PropTypes.string,
    area: PropTypes.string,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

RecipesDoneCard.defaultProps = {
  recipe: {
    alcoholicOrNot: '',
    tags: '',
    area: '',
  },
};

export default RecipesDoneCard;
