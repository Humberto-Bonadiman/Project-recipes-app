import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientCard from '../components/IngredientCard';
import LoadingIngredients from '../components/loaders/LoadingIngredients';
import RecipesContext from '../context/RecipesContext';

function ExploreMealsByIngredients() {
  const [mealsIngredient, setMealsIngredient] = useState([]);
  const { loading, setLoading } = useContext(RecipesContext);

  useEffect(() => {
    setLoading(true);
    const fetchMeals = async () => {
      const MAX_LENGTH = 12;
      const MIN_LENGTH = 0;
      const urlFetch = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const response = await urlFetch.json();
      const result = response.meals;
      setMealsIngredient(result.slice(MIN_LENGTH, MAX_LENGTH));
      setLoading(false);
    };
    fetchMeals();
  }, [setLoading]);

  return (
    <div>
      { loading
        ? <LoadingIngredients />
        : (
          <div className="body-background">
            <Header title="Explorar Ingredientes" />
            <section className="recipes-list">
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
            </section>
            <Footer />
          </div>
        )}
    </div>
  );
}

export default ExploreMealsByIngredients;
