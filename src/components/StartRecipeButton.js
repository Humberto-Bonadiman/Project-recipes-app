import React from 'react';
import { useHistory, useParams } from 'react-router';
import '../styles/StartRecipeButton.css';

function StartRecipeButton() {
  const history = useHistory();
  const { idMeal, idDrink } = useParams();
  const redirect = () => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'))
    || { cocktails: {}, meals: {} };
    if (history.location.pathname.includes('comidas')) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...inProgressRecipes,
        meals: {
          ...inProgressRecipes.meals,
          [idMeal]: [],
        },
      }));
    } else {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...inProgressRecipes,
        cocktails: {
          ...inProgressRecipes.cocktails,
          [idDrink]: [],
        },
      }));
    }
    history.push(`${history.location.pathname}/in-progress`);
  };

  return (
    <section>
      <button
        data-testid="start-recipe-btn"
        type="button"
        className="start-recipe-btn"
        onClick={ redirect }
      >
        Iniciar Receita
      </button>
    </section>
  );
}
export default StartRecipeButton;
