import React, { useState } from 'react';
import FilterButtons from '../components/FilterButtons';
import Header from '../components/Header';
import RecipesDoneCard from '../components/RecipesDoneCard';

function RecipesMade() {
  const [showAll, setShowAll] = useState(true);
  const [showMeals, setShowMeals] = useState(false);
  const [showDrinks, setShowDrinks] = useState(false);
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  return (
    <div>
      <Header title="Receitas Feitas" />
      <FilterButtons
        setShowAll={ setShowAll }
        setShowMeals={ setShowMeals }
        setShowDrinks={ setShowDrinks }
      />
      {showAll && doneRecipes.map((recipe, index) => (
        <RecipesDoneCard key={ index } recipe={ recipe } index={ index } />
      ))}
      {showMeals && doneRecipes
        .filter(({ type }) => type === 'comida').map((recipe, index) => (
          <RecipesDoneCard key={ index } recipe={ recipe } index={ index } />
        ))}
      {showDrinks && doneRecipes
        .filter(({ type }) => type === 'bebida').map((recipe, index) => (
          <RecipesDoneCard key={ index } recipe={ recipe } index={ index } />
        ))}
    </div>
  );
}

export default RecipesMade;
