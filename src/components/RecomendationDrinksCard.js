import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function RecomendationDrinksCard() {
  const { apiDrinks, setApiDrinks } = useContext(RecipesContext);
  const MAX_DRINKS = 6;
  useEffect(() => {
    const fetchDrinks = async () => {
      const urlFetch = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const response = await urlFetch.json();
      const result = response.drinks;
      setApiDrinks(result);
    };
    fetchDrinks();
  }, []);
  return (
    <section>
      { apiDrinks && apiDrinks
        .map((recipe, index) => {
          if (index < MAX_DRINKS) {
            return (
              <Link
                className="recipe-card"
                data-testid={ `${index}-recomendation-card` }
                to={ `/bebidas/${recipe.idDrink}` }
                key={ index }
              >
                <img
                  className="card-img"
                  data-testid={ `${index}-card-img` }
                  src={ recipe.strDrinkThumb }
                  alt={ recipe.strDrink }
                />
                <h5>{ recipe.strCategory }</h5>
                <h4
                  className="card-name"
                  data-testid={ `${index}-card-name` }
                >
                  {recipe.strDrink}
                </h4>
              </Link>
            );
          }
          return null;
        })}
    </section>
  );
}
export default RecomendationDrinksCard;
