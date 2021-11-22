import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import '../styles/RecomendationCard.css';

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
  }, [setApiDrinks]);
  return (
    <section className="details-containers">
      <h2 className="recipe-subtitle">Recommended</h2>
      <div className="carousel">
        { apiDrinks && apiDrinks
          .map((recipe, index) => {
            if (index < MAX_DRINKS) {
              return (
                <Link
                  className="recomendation-card"
                  data-testid={ `${index}-recomendation-card` }
                  to={ `/bebidas/${recipe.idDrink}` }
                  key={ index }
                >
                  <img
                    className="recomendation-card-img"
                    data-testid={ `${index}-card-img` }
                    src={ recipe.strDrinkThumb }
                    alt={ recipe.strDrink }
                  />
                  <h5 className="recomendation-card-category">{ recipe.strCategory }</h5>
                  <h4
                    className="recomendation-card-title"
                    data-testid={ `${index}-recomendation-title` }
                  >
                    {recipe.strDrink}
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
export default RecomendationDrinksCard;
