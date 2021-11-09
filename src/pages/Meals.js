import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MealRecipeCard from '../components/MealRecipeCard';
import RecipesContext from '../context/RecipesContext';
import '../styles/RecipeCard.css';

function Meals() {
  const { apiMeals } = useContext(RecipesContext);
  const MAX_LENGTH = 12;
  return (
    <div>
      <Header title="Comidas" showButton />
      <main className="recipes-list">
        { apiMeals && apiMeals.map((recipe, index) => {
          if (index < MAX_LENGTH) {
            return <MealRecipeCard key={ index } recipe={ recipe } index={ index } />;
          }
          return null;
        })}
      </main>
      <Footer />
    </div>
  );
}

export default Meals;
