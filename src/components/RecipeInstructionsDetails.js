import React from 'react';
import PropTypes from 'prop-types';

function RecipeInstructionsDetails({ recipeDetails: { strInstructions } }) {
  return (
    <section className="details-containers">
      <h2 className="recipe-subtitle">Instructions</h2>
      <p
        className="instructions"
        data-testid="instructions"
      >
        {strInstructions}

      </p>
    </section>
  );
}
RecipeInstructionsDetails.propTypes = {
  recipeDetails: PropTypes.shape({
    strInstructions: PropTypes.string,
  }).isRequired,
};
export default RecipeInstructionsDetails;
