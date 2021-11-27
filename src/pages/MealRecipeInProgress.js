import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RecipesContext from '../context/RecipesContext';
import FinishRecipeButton from '../components/FinishRecipeButton';
import IngredientsInProgress from '../components/IngredientsInProgress';
import LoadingMealDetails from '../components/loaders/LoadingMealDetails';
import RecipeHeaderMealsDetails from '../components/RecipeHeaderMealsDetails';
import RecipeInstructionsDetails from '../components/RecipeInstructionsDetails';

function MealRecipeInProgress() {
  const { idMeal } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const { loading, setLoading } = useContext(RecipesContext);

  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'))
    || { cocktails: {}, meals: {} };

  const [ingredientsUsed, setIngredientsUsed] = useState(
    inProgressRecipes.meals[idMeal]
      ? inProgressRecipes.meals[idMeal] : [],
  );

  useEffect(() => {
    setLoading(true);
    const fetchRecipeDetails = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const data = await response.json();
      setRecipeDetails(data.meals[0]);
      setLoading(false);
    };
    fetchRecipeDetails();
  }, [idMeal, setLoading]);

  return (
    <div>
      { loading
        ? <LoadingMealDetails />
        : (
          <section className="page-details">
            <RecipeHeaderMealsDetails recipeDetails={ recipeDetails } />
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

export default MealRecipeInProgress;
