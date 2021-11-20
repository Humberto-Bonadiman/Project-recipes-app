import React from 'react';
import { useHistory, useParams } from 'react-router';
import PropTypes from 'prop-types';
import toggleIngredient from '../services/toggleIngredient';
import '../styles/IngredientsInProgress.css';

function IngredientsInProgress(props) {
  const { recipeDetails, ingredientsUsed, setIngredientsUsed } = props;
  const history = useHistory();
  const { idMeal, idDrink } = useParams();

  const handleChange = ({ target }) => {
    target.parentElement.classList.toggle('checked');
    if (history.location.pathname.includes('comidas')) {
      toggleIngredient('meals', idMeal, target);
    } else {
      toggleIngredient('cocktails', idDrink, target);
    }
    return ingredientsUsed.includes(target.id)
      ? setIngredientsUsed(ingredientsUsed.filter((item) => item !== target.id))
      : setIngredientsUsed([...ingredientsUsed, target.id]);
  };

  const ingredients = Object.entries(recipeDetails)
    .filter((entry) => entry[0].includes('strIngredient'))
    .filter((entry) => entry[1]);

  const ingredientAndMeasure = (ingredient, index) => (
    recipeDetails[`strMeasure${index + 1}`]
      ? `${recipeDetails[ingredient]} - 
        ${recipeDetails[`strMeasure${index + 1}`]}`
      : recipeDetails[ingredient]);

  const handleChecked = (id) => (
    ingredientsUsed.length > 0
      ? ingredientsUsed.includes(id.toString())
      : false
  );

  return (
    <section className="details-containers">
      <h2 className="recipe-subtitle">Ingredients</h2>
      <ul className="ingredients-list">
        {ingredients.map((ingredient, index) => {
          if (recipeDetails[ingredient[0]]) {
            let classChecked = '';
            if (handleChecked(index + 1)) {
              classChecked = 'checked';
            }
            return (
              <li key={ index }>
                <label
                  className={ classChecked }
                  htmlFor={ index + 1 }
                  data-testid={ `${index}-ingredient-step` }
                >
                  <input
                    type="checkbox"
                    id={ index + 1 }
                    name={ ingredient[1] }
                    onChange={ handleChange }
                    checked={ handleChecked(index + 1) }
                  />
                  { ingredientAndMeasure(ingredient[0], index) }
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
  recipeDetails: PropTypes.objectOf(PropTypes.string),
  ingredientsUsed: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default IngredientsInProgress;
