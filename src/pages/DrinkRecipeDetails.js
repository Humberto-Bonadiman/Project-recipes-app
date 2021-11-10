import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeIngredientDetails from '../components/RecipeIngredientDetails';
import RecipeInstructionsDetails from '../components/RecipeInstructionsDetails';
import RecomendationMealsCard from '../components/RecomendationMealsCard';
import StartRecipeButton from '../components/StartRecipeButton';
import RecipeHeaderDrinksDetails from '../components/RecipeHeaderDrinksDetails';

function DrinkRecipeDetails() {
  const { idDrink } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
      const data = await response.json();
      setRecipeDetails(data.drinks[0]);
      console.log(data.drinks[0]);
    };
    fetchRecipeDetails();
  }, []);

  return (
    <section>
      <RecipeHeaderDrinksDetails recipeDetails={ recipeDetails } />
      <RecipeIngredientDetails recipeDetails={ recipeDetails } />
      <RecipeInstructionsDetails recipeDetails={ recipeDetails } />
      <RecomendationMealsCard />
      <StartRecipeButton />
    </section>
  );
}

export default DrinkRecipeDetails;
