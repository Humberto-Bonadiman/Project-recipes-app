import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import '../styles/carousel.css';

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
  }, []);
  return (
    <div className="flex">
      { apiMeals && apiMeals
        .map((recipe, index) => {
          if (index < MAX_MEALS) {
            return (
              <Link
                className="carousel recipe-card"
                data-testid={ `${index}-recomendation-card` }
                to={ `/comidas/${recipe.idMeal}` }
                key={ index }
              >
                <img
                  className="card-img"
                  data-testid={ `${index}-card-img` }
                  src={ recipe.strMealThumb }
                  alt={ recipe.strMeal }
                />
                <h5>{ recipe.strCategory }</h5>
                <h4
                  className="card-name"
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
  );
}

export default RecomendationMealsCard;
