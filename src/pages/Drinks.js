import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryDrinks from '../components/CategoryDrinks';
import RenderDrinksCards from '../components/RenderDrinksCards';
import LoadingDrink from '../components/loaders/LoadingDrink';
import '../styles/RecipeCard.css';

function Drinks() {
  const {
    apiDrinks,
    setApiDrinks,
    apiFilterDrinks,
    showAll,
    showFilter,
    saveIngredient,
    loading,
    setLoading,
  } = useContext(RecipesContext);

  useEffect(() => {
    setLoading(true);
    const fetchDrinks = async () => {
      let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      if (saveIngredient !== '') {
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${saveIngredient}`;
      }
      const urlFetch = await fetch(url);
      const response = await urlFetch.json();
      const result = response.drinks;
      setApiDrinks(result);
      setLoading(false);
    };
    fetchDrinks();
  }, [setApiDrinks, saveIngredient, setLoading]);

  return (
    <div>
      { loading
        ? <LoadingDrink />
        : (
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
        )}
    </div>
  );
}

export default Drinks;
