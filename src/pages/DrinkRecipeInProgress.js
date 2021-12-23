import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FinishRecipeButton from '../components/FinishRecipeButton';
import IngredientsInProgress from '../components/IngredientsInProgress';
import RecipeHeaderDrinksDetails from '../components/RecipeHeaderDrinksDetails';
import RecipeInstructionsDetails from '../components/RecipeInstructionsDetails';
import LoadingDrinkDetails from '../components/loaders/LoadingDrinkDetails';
import RecipesContext from '../context/RecipesContext';

function DrinkRecipeInProgress() {
  const { idDrink } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const { loading, setLoading } = useContext(RecipesContext);

  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'))
    || { cocktails: {}, meals: {} };

  const [ingredientsUsed, setIngredientsUsed] = useState(
    inProgressRecipes.cocktails[idDrink]
      ? inProgressRecipes.cocktails[idDrink] : [],
  );

  useEffect(() => {
    setLoading(true);
    const fetchRecipeDetails = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
      const data = await response.json();
      setRecipeDetails(data.drinks[0]);
      setLoading(false);
    };
    fetchRecipeDetails();
  }, [idDrink, setLoading]);

  return (
    <div>
      { loading
        ? <LoadingDrinkDetails />
        : (
          <section className="page-details">
            <RecipeHeaderDrinksDetails recipeDetails={ recipeDetails } />
            <IngredientsInProgress
              recipeDetails={ recipeDetails }
              ingredientsUsed={ ingredientsUsed }
              setIngredientsUsed={ setIngredientsUsed }
            />
            <RecipeInstructionsDetails recipeDetails={ recipeDetails } />
            <FinishRecipeButton
              recipeDetails={ recipeDetails }
              ingredientsUsed={ ingredientsUsed }
            />
          </section>
        )}
    </div>
  );
}

export default DrinkRecipeInProgress;
