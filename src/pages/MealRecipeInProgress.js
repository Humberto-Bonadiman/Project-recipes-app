import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FinishRecipeButton from '../components/FinishRecipeButton';
import IngredientsInProgress from '../components/IngredientsInProgress';
import RecipeHeaderMealsDetails from '../components/RecipeHeaderMealsDetails';
import RecipeInstructionsDetails from '../components/RecipeInstructionsDetails';

function MealRecipeInProgress() {
  const { idMeal } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});

  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'))
    || { cocktails: {}, meals: {} };

  const [ingredientsUsed, setIngredientsUsed] = useState(
    inProgressRecipes.meals[idMeal]
      ? inProgressRecipes.meals[idMeal] : [],
  );

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const data = await response.json();
      setRecipeDetails(data.meals[0]);
    };
    fetchRecipeDetails();
  }, [idMeal]);

  return (
    <section>
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
  );
}

export default MealRecipeInProgress;
