import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeIngredientDetails from '../components/RecipeIngredientDetails';
import RecipeInstructionsDetails from '../components/RecipeInstructionsDetails';
import RecomendationMealsCard from '../components/RecomendationMealsCard';
import StartRecipeButton from '../components/StartRecipeButton';
import RecipeHeaderDrinksDetails from '../components/RecipeHeaderDrinksDetails';
import ContinueRecipeButton from '../components/ContinueRecipeButton';
import RecipesContext from '../context/RecipesContext';
import LoadingDrinkDetails from '../components/loaders/LoadingDrinkDetails';
import '../styles/RecipeDetails.css';

function DrinkRecipeDetails() {
  const { idDrink } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const [showStartButton, setShowStartButton] = useState(true);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const { loading, setLoading } = useContext(RecipesContext);

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

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    if (doneRecipes.some((recipe) => recipe.id === idDrink)) {
      setShowStartButton(false);
    }
  }, [idDrink]);

  useEffect(() => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'))
      || { cocktails: {} };
    if (inProgressRecipes.cocktails[idDrink]) {
      setShowContinueButton(true);
      setShowStartButton(false);
    }
  }, [idDrink]);

  return (
    <div>
      { loading
        ? <LoadingDrinkDetails />
        : (
          <section className="page-details">
            <RecipeHeaderDrinksDetails recipeDetails={ recipeDetails } />
            <RecipeIngredientDetails recipeDetails={ recipeDetails } />
            <RecipeInstructionsDetails recipeDetails={ recipeDetails } />
            <RecomendationMealsCard />
            {showStartButton && <StartRecipeButton />}
            {showContinueButton && <ContinueRecipeButton />}
          </section>
        )}
    </div>
  );
}

export default DrinkRecipeDetails;
