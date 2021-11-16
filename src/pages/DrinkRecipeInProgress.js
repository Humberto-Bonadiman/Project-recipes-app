import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FinishRecipeButton from '../components/FinishRecipeButton';
import IngredientsInProgress from '../components/IngredientsInProgress';
import RecipeHeaderDrinksDetails from '../components/RecipeHeaderDrinksDetails';
import RecipeInstructionsDetails from '../components/RecipeInstructionsDetails';

function DrinkRecipeInProgress() {
  const { idDrink } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
      const data = await response.json();
      setRecipeDetails(data.drinks[0]);
    };
    fetchRecipeDetails();
  }, [idDrink]);

  return (
    <section>
      <RecipeHeaderDrinksDetails recipeDetails={ recipeDetails } />
      <IngredientsInProgress recipeDetails={ recipeDetails } />
      <RecipeInstructionsDetails recipeDetails={ recipeDetails } />
      <FinishRecipeButton />
    </section>
  );
}

export default DrinkRecipeInProgress;
