import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';
import CategoryMeals from '../components/CategoryMeals';
import RenderMealsCards from '../components/RenderMealsCards';
import '../styles/RecipeCard.css';

function Meals() {
  const {
    apiMeals,
    setApiMeals,
    showAll,
    showFilter,
    apiFilterMeals,
    saveIngredient,
  } = useContext(RecipesContext);

  useEffect(() => {
    const fetchMeals = async () => {
      let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      if (saveIngredient !== '') {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${saveIngredient}`;
      }
      const urlFetch = await fetch(url);
      const response = await urlFetch.json();
      const result = response.meals;
      setApiMeals(result);
    };
    fetchMeals();
  }, [setApiMeals, saveIngredient]);

  return (
    <div>
      <Header title="Comidas" showButton />
      <CategoryMeals />
      <main className="recipes-list">
        { showAll && apiMeals && apiMeals
          .map((recipe, index) => RenderMealsCards(recipe, index))}
        { showFilter && apiFilterMeals && apiFilterMeals
          .map((recipe, index) => RenderMealsCards(recipe, index))}
      </main>
      <Footer />
    </div>
  );
}

export default Meals;
