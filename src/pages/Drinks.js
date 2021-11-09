import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinkRecipeCard from '../components/DrinkRecipeCard';
import RecipesContext from '../context/RecipesContext';
import '../styles/RecipeCard.css';

function Drinks() {
  const { apiDrinks } = useContext(RecipesContext);
  const MAX_LENGTH = 12;
  return (
    <div>
      <Header title="Bebidas" showButton />
      <main className="recipes-list">
        { apiDrinks && apiDrinks.map((recipe, index) => {
          if (index < MAX_LENGTH) {
            return <DrinkRecipeCard key={ index } recipe={ recipe } index={ index } />;
          }
          return null;
        })}
      </main>
      <Footer />
    </div>
  );
}

export default Drinks;
