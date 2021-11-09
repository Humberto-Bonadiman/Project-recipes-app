import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MealRecipeCard from '../components/MealRecipeCard';
import RecipesContext from '../context/RecipesContext';
import CategoryMeals from '../components/CategoryMeals';

function Meals() {
  const { apiMeals, setApiMeals } = useContext(RecipesContext);
  const MAX_LENGTH = 12;

  useEffect(() => {
    const fetchMeals = async () => {
      const urlFetch = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const response = await urlFetch.json();
      const result = response.meals;
      setApiMeals(result);
    };
    fetchMeals();
  }, []);

  return (
    <div>
      <Header title="Comidas" showButton />
      <CategoryMeals />
      { apiMeals && apiMeals.map((recipe, index) => {
        if (index < MAX_LENGTH) {
          return <MealRecipeCard key={ index } recipe={ recipe } index={ index } />;
        }
        return null;
      })}
      <Footer />
    </div>
  );
}

export default Meals;
