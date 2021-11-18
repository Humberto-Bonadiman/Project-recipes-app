import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientCard from '../components/IngredientCard';

function ExploreMealsByIngredients() {
  const [mealsIngredient, setMealsIngredient] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const MAX_LENGTH = 12;
      const MIN_LENGTH = 0;
      const urlFetch = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const response = await urlFetch.json();
      const result = response.meals;
      setMealsIngredient(result.slice(MIN_LENGTH, MAX_LENGTH));
    };
    fetchMeals();
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {mealsIngredient.map((ingr, index) => {
        const urlImage = `https://www.themealdb.com/images/ingredients/${ingr.strIngredient}-Small.png`;
        return (
          <IngredientCard
            rota="/comidas"
            key={ index }
            index={ index }
            urlImage={ urlImage }
            name={ ingr.strIngredient }
          />);
      })}
      <Footer />
    </div>
  );
}

export default ExploreMealsByIngredients;
