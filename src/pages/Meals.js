import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryMeals from '../components/CategoryMeals';
import RenderMealsCards from '../components/RenderMealsCards';
import LoadingMeal from '../components/loaders/LoadingMeal';
import '../styles/RecipeCard.css';

function Meals() {
  const {
    apiMeals,
    setApiMeals,
    showAll,
    showFilter,
    apiFilterMeals,
    saveIngredient,
    loading,
    setLoading,
  } = useContext(RecipesContext);

  useEffect(() => {
    setLoading(true);
    const fetchMeals = async () => {
      let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      if (saveIngredient !== '') {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${saveIngredient}`;
      }
      const urlFetch = await fetch(url);
      const response = await urlFetch.json();
      const result = response.meals;
      setApiMeals(result);
      setLoading(false);
    };
    fetchMeals();
  }, [setApiMeals, saveIngredient, setLoading]);

  return (
    <div>
      { loading
        ? <LoadingMeal />
        : (
          <div className="body-background">
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
        )}
    </div>
  );
}

export default Meals;
