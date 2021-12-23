import React from 'react';
import PropTypes from 'prop-types';

function RecipeIngredientDetails({ recipeDetails }) {
  const ingredients = Object.keys(recipeDetails)
    .filter((key) => key.includes('strIngredient'));

  const ingredientAndMeasure = (ingredient, index) => (
    recipeDetails[`strMeasure${index + 1}`]
      ? `${recipeDetails[ingredient]} - 
        ${recipeDetails[`strMeasure${index + 1}`]}`
      : recipeDetails[ingredient]);

  return (
    <section className="details-containers">
      <h2 className="recipe-subtitle">Ingredients</h2>
      <ul className="ingredients-list">
        {ingredients.map((ingredient, index) => {
          if (recipeDetails[ingredient]) {
            return (
              <li
                className="ingredient"
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { ingredientAndMeasure(ingredient, index) }
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
  recipeDetails: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default RecipeIngredientDetails;
