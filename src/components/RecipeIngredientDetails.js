import React from 'react';
import PropTypes from 'prop-types';

function RecipeIngredientDetails({ recipeDetails }) {
  const ingredients = Object.keys(recipeDetails)
    .filter((key) => key.includes('strIngredient'));
  return (
    <section>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => {
          if (recipeDetails[ingredient] !== '') {
            return (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {`${recipeDetails[ingredient]} - 
                ${recipeDetails[`strMeasure${index + 1}`]}`}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </section>
  );
}
RecipeIngredientDetails.propTypes = {
  recipeDetails: PropTypes.objectOf().isRequired,
};
export default RecipeIngredientDetails;
