import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RecipesContext from '../context/RecipesContext';
import RecipeHeaderMealsDetails from '../components/RecipeHeaderMealsDetails';
import RecipeIngredientDetails from '../components/RecipeIngredientDetails';
import RecipeInstructionsDetails from '../components/RecipeInstructionsDetails';
import RecomendationDrinksCard from '../components/RecomendationDrinksCard';
import RecipeVideoDetails from '../components/RecipeVideoDetails';
import StartRecipeButton from '../components/StartRecipeButton';
import ContinueRecipeButton from '../components/ContinueRecipeButton';
import LoadingMealDetails from '../components/loaders/LoadingMealDetails';
import '../styles/RecipeDetails.css';

function MealRecipeDetails() {
  const { idMeal } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const [showStartButton, setShowStartButton] = useState(true);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const { loading, setLoading } = useContext(RecipesContext);

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

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    if (doneRecipes.some((recipe) => recipe.id === idMeal)) {
      setShowStartButton(false);
    }
  }, [idMeal]);

  useEffect(() => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'))
      || { meals: {} };
    if (inProgressRecipes.meals[idMeal]) {
      setShowContinueButton(true);
      setShowStartButton(false);
    }
  }, [idMeal]);

  return (
    <div>
      { loading
        ? <LoadingMealDetails />
        : (
          <section className="page-details">
            <RecipeHeaderMealsDetails recipeDetails={ recipeDetails } />
            <RecipeIngredientDetails recipeDetails={ recipeDetails } />
            <RecipeInstructionsDetails recipeDetails={ recipeDetails } />
            <RecipeVideoDetails recipeDetails={ recipeDetails } />
            <RecomendationDrinksCard />
            {showStartButton && <StartRecipeButton /> }
            {showContinueButton && <ContinueRecipeButton /> }
          </section>
        )}
    </div>
  );
}
export default MealRecipeDetails;
