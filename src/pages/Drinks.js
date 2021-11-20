import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';
import CategoryDrinks from '../components/CategoryDrinks';
import RenderDrinksCards from '../components/RenderDrinksCards';
import '../styles/RecipeCard.css';

function Drinks() {
  const {
    apiDrinks,
    setApiDrinks,
    apiFilterDrinks,
    showAll,
    showFilter,
    saveIngredient,
  } = useContext(RecipesContext);

  useEffect(() => {
    const fetchDrinks = async () => {
      let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      if (saveIngredient !== '') {
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${saveIngredient}`;
      }
      const urlFetch = await fetch(url);
      const response = await urlFetch.json();
      const result = response.drinks;
      setApiDrinks(result);
    };
    fetchDrinks();
  }, [setApiDrinks, saveIngredient]);

  return (
    <div className="body-background">
      <Header title="Bebidas" showButton />
      <CategoryDrinks />
      <main className="recipes-list">
        { showAll && apiDrinks && apiDrinks
          .map((recipe, index) => RenderDrinksCards(recipe, index))}
        { showFilter && apiFilterDrinks && apiFilterDrinks
          .map((recipe, index) => RenderDrinksCards(recipe, index))}
      </main>
      <Footer />
    </div>
  );
}

export default Drinks;
