import React from 'react';
import FilterButtons from '../components/FilterButtons';
import Header from '../components/Header';
import RecipesDoneCard from '../components/RecipesDoneCard';

function RecipesMade() {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  return (
    <div>
      <Header title="Receitas Feitas" />
      <FilterButtons />
      {doneRecipes.map((recipe, index) => (
        <RecipesDoneCard key={ index } recipe={ recipe } index={ index } />
      ))}
    </div>
  );
}

export default RecipesMade;
