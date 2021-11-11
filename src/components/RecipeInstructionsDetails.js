import React from 'react';
import PropTypes from 'prop-types';

function RecipeInstructionsDetails({ recipeDetails: { strInstructions } }) {
  return (
    <section>
      <h2>Instructions</h2>
      <p data-testid="instructions">{strInstructions}</p>
    </section>
  );
}
RecipeInstructionsDetails.propTypes = {
  recipeDetails: PropTypes.shape({
    strInstructions: PropTypes.string,
  }).isRequired,
};
export default RecipeInstructionsDetails;
