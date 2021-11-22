import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import '../styles/RecomendationCard.css';

function RecomendationMealsCard() {
  const { apiMeals, setApiMeals } = useContext(RecipesContext);
  const MAX_MEALS = 6;
  useEffect(() => {
    const fetchMeals = async () => {
      const urlFetch = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const response = await urlFetch.json();
      const result = response.meals;
      setApiMeals(result);
    };
    fetchMeals();
  }, [setApiMeals]);
  return (
    <section className="details-containers">
      <h2 className="recipe-subtitle">Recommended</h2>
      <div className="carousel">
        { apiMeals && apiMeals
          .map((recipe, index) => {
            if (index < MAX_MEALS) {
              return (
                <Link
                  className="recomendation-card"
                  data-testid={ `${index}-recomendation-card` }
                  to={ `/comidas/${recipe.idMeal}` }
                  key={ index }
                >
                  <img
                    className="recomendation-card-img"
                    data-testid={ `${index}-card-img` }
                    src={ recipe.strMealThumb }
                    alt={ recipe.strMeal }
                  />
                  <h5 className="recomendation-card-category">{ recipe.strCategory }</h5>
                  <h4
                    className="recomendation-card-title"
                    data-testid={ `${index}-recomendation-title` }
                  >
                    {recipe.strMeal}
                  </h4>
                </Link>
              );
            }
            return null;
          })}
      </div>
    </section>
  );
}

export default RecomendationMealsCard;
