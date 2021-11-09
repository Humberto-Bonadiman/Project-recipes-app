import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinkRecipeCard from '../components/DrinkRecipeCard';
import RecipesContext from '../context/RecipesContext';
import CategoryDrinks from '../components/CategoryDrinks';

function Drinks() {
  const { apiDrinks, setApiDrinks } = useContext(RecipesContext);
  const MAX_LENGTH = 12;

  useEffect(() => {
    const fetchDrinks = async () => {
      const urlFetch = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const response = await urlFetch.json();
      const result = response.drinks;
      setApiDrinks(result);
    };
    fetchDrinks();
  }, []);

  return (
    <div>
      <Header title="Bebidas" showButton />
      <CategoryDrinks />
      { apiDrinks && apiDrinks.map((recipe, index) => {
        if (index < MAX_LENGTH) {
          return <DrinkRecipeCard key={ index } recipe={ recipe } index={ index } />;
        }
        return null;
      })}
      <Footer />
    </div>
  );
}

export default Drinks;
