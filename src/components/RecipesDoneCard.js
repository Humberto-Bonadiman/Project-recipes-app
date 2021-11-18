import React from 'react';

function RecipesDoneCard({ index, recipe }) {
  const { name, image, category, alcoholicOrNot, doneDate, tags, area } = recipe;
  return (
    <div>
      <img
        className="card-img"
        data-testid={ `${index}-horizontal-image` }
        src={ image }
        alt={ name }
      />
      <h4
        className="card-name"
        data-testid={ `${index}-horizontal-top-text` }
      >
        { category }
      </h4>
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
        onClick={ () => {
          window.navigator.clipboard.writeText(currentURL);
          setShowCopyMessage(true);
        } }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      <span
        data-testid={ `${index}-${tagName}-horizontal-tag` }
      />
    </div>
  );
}

export default RecipesDoneCard;
