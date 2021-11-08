import React, { useContext } from 'react';
import Header from '../components/Header';
import DrinkRecipeCard from '../components/DrinkRecipeCard';
import RecipesContext from '../context/RecipesContext';

function Drinks() {
  const { apiDrinks } = useContext(RecipesContext);
  const MAX_LENGTH = 12;
  return (
    <div>
      <Header title="Bebidas" showButton />
      { apiDrinks && apiDrinks.map((recipe, index) => {
        if (index < MAX_LENGTH) {
          return <DrinkRecipeCard key={ index } recipe={ recipe } index={ index } />;
        }
        return null;
      })}
    </div>
  );
}

export default Drinks;
