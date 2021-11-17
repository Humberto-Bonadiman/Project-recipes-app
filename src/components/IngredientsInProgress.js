import React from 'react';
import PropTypes from 'prop-types';
import '../styles/IngredientsInProgress.css';
import { useHistory, useParams } from 'react-router';
import toggleIngredient from '../services/toggleIngredient';

function IngredientsInProgress({ recipeDetails }) {
  const history = useHistory();
  const { idMeal, idDrink } = useParams();
  const ingredients = Object.keys(recipeDetails)
    .filter((key) => key.includes('strIngredient'));

  const ingredientAndMeasure = (ingredient, index) => (
    recipeDetails[`strMeasure${index + 1}`]
      ? `${recipeDetails[ingredient]} - 
        ${recipeDetails[`strMeasure${index + 1}`]}`
      : recipeDetails[ingredient]);

  const handleChecked = (id) => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'))
    || { cocktails: {}, meals: {} };
    if (history.location.pathname.includes('comidas')) {
      if (inProgressRecipes.meals[idMeal]) {
        return inProgressRecipes.meals[idMeal].includes(id);
      }
      return false;
    }
    if (inProgressRecipes.cocktails[idDrink]) {
      return inProgressRecipes.cocktails[idDrink].includes(id);
    }
    return false;
  };

  const handleChange = ({ target }) => {
    target.parentElement.classList.toggle('checked');
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'))
    || { cocktails: {}, meals: {} };
    if (history.location.pathname.includes('comidas')) {
      if (inProgressRecipes.meals[idMeal]) {
        toggleIngredient(inProgressRecipes, 'meals', idMeal, target);
      }
    } else if (inProgressRecipes.cocktails[idDrink]) {
      toggleIngredient(inProgressRecipes, 'cocktails', idDrink, target);
    }
    if (target.checked) {
      console.log('if');
      target.removeAttribute('checked');
    } else {
      console.log('else');
      target.setAttribute('checked', true);
    }
  };
  const NUM_INGREDIENT = 13;
  return (
    <section>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => {
          if (recipeDetails[ingredient]) {
            let classChecked = '';
            if (handleChecked(ingredient.slice(NUM_INGREDIENT))) {
              classChecked = 'checked';
            }
            return (
              <li key={ index }>
                <label
                  className={ classChecked }
                  htmlFor={ ingredient }
                  data-testid={ `${index}-ingredient-step` }
                >
                  <input
                    type="checkbox"
                    id={ ingredient.slice(NUM_INGREDIENT) }
                    name={ ingredient }
                    onChange={ handleChange }
                    defaultChecked={ handleChecked(ingredient.slice(NUM_INGREDIENT)) }
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
