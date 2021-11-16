import React from 'react';
import PropTypes from 'prop-types';
import '../styles/IngredientsInProgress.css';

function IngredientsInProgress({ recipeDetails }) {
  const ingredients = Object.keys(recipeDetails)
    .filter((key) => key.includes('strIngredient'));

  const ingredientAndMeasure = (ingredient, index) => (
    recipeDetails[`strMeasure${index + 1}`]
      ? `${recipeDetails[ingredient]} - 
        ${recipeDetails[`strMeasure${index + 1}`]}`
      : recipeDetails[ingredient]);

  const handleChecked = ({ target }) => target.parentElement.classList.toggle('checked');

  return (
    <section>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => {
          if (recipeDetails[ingredient]) {
            return (
              <li key={ index }>
                <label
                  htmlFor={ ingredient }
                  data-testid={ `${index}-ingredient-step` }
                >
                  <input
                    type="checkbox"
                    id={ ingredient }
                    name={ ingredient }
                    onChange={ handleChecked }
                  />
                  { ingredientAndMeasure(ingredient, index) }
                </label>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </section>
  );
}
IngredientsInProgress.propTypes = {
  recipeDetails: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default IngredientsInProgress;
