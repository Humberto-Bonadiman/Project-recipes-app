import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RecipeHeaderMealsDetails from '../components/RecipeHeaderMealsDetails';
import RecipeIngredientDetails from '../components/RecipeIngredientDetails';
import RecipeInstructionsDetails from '../components/RecipeInstructionsDetails';
import RecomendationDrinksCard from '../components/RecomendationDrinksCard';
import RecipeVideoDetails from '../components/RecipeVideoDetails';
import StartRecipeButton from '../components/StartRecipeButton';

function MealRecipeDetails() {
  const { idMeal } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
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
      <RecipeIngredientDetails recipeDetails={ recipeDetails } />
      <RecipeInstructionsDetails recipeDetails={ recipeDetails } />
      <RecipeVideoDetails recipeDetails={ recipeDetails } />
      <RecomendationDrinksCard />
      <StartRecipeButton />
    </section>
  );
}
export default MealRecipeDetails;
