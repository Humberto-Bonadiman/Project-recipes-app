import React from 'react';
import DrinkRecipeCard from './DrinkRecipeCard';

function RenderDrinksCards(recipe, index) {
  const MAX_LENGTH = 12;
  if (index < MAX_LENGTH) {
    return (
      <DrinkRecipeCard key={ index } recipe={ recipe } index={ index } />
    );
  }
  return null;
}

export default RenderDrinksCards;
