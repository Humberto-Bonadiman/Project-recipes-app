import React, { useState } from 'react';
import FilterButtons from '../components/FilterButtons';
import Header from '../components/Header';
import RecipesDoneCard from '../components/RecipesDoneCard';
import '../styles/RecipeHorizontalCard.css';

function RecipesMade() {
  const [showAll, setShowAll] = useState(true);
  const [showMeals, setShowMeals] = useState(false);
  const [showDrinks, setShowDrinks] = useState(false);
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  return (
    <div className="body-background">
      <Header title="Receitas Feitas" />
      <FilterButtons
        setShowAll={ setShowAll }
        setShowMeals={ setShowMeals }
        setShowDrinks={ setShowDrinks }
      />
      <section className="recipes-list">
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
      </section>
    </div>
  );
}

export default RecipesMade;
