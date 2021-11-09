import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';
import CategoryDrinks from '../components/CategoryDrinks';
import RenderDrinksCards from '../components/RenderDrinksCards';

function Drinks() {
  const {
    apiDrinks,
    setApiDrinks,
    apiFilterDrinks,
    showAll,
    showFilter,
  } = useContext(RecipesContext);

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
      { showAll && apiDrinks && apiDrinks
        .map((recipe, index) => RenderDrinksCards(recipe, index))}
      { showFilter && apiFilterDrinks && apiFilterDrinks
        .map((recipe, index) => RenderDrinksCards(recipe, index))}
      <Footer />
    </div>
  );
}

export default Drinks;
