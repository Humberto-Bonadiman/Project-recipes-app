import React from 'react';
import MealRecipeCard from './MealRecipeCard';

function RenderMealsCards(recipe, index) {
  const MAX_LENGTH = 12;
  if (index < MAX_LENGTH) {
    return (<MealRecipeCard key={ index } recipe={ recipe } index={ index } />);
  }
  return null;
}

export default RenderMealsCards;
