import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientCard from '../components/IngredientCard';
import LoadingIngredients from '../components/loaders/LoadingIngredients';
import RecipesContext from '../context/RecipesContext';

function ExploreDrinksByIngredients() {
  const [drinksIngredient, setDrinksIngredient] = useState([]);
  const { loading, setLoading } = useContext(RecipesContext);

  useEffect(() => {
    setLoading(true);
    const fetchDrinks = async () => {
      const MAX_LENGTH = 12;
      const MIN_LENGTH = 0;
      const urlFetch = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      const response = await urlFetch.json();
      const result = response.drinks;
      setDrinksIngredient(result.slice(MIN_LENGTH, MAX_LENGTH));
      setLoading(false);
    };
    fetchDrinks();
  }, [setLoading]);

  return (
    <div>
      { loading
        ? <LoadingIngredients />
        : (
          <div className="body-background">
            <Header title="Explorar Ingredientes" />
            <section className="recipes-list">
              {drinksIngredient.map((ingr, index) => {
                const urlImage = `https://www.thecocktaildb.com/images/ingredients/${ingr.strIngredient1}-Small.png`;
                return (
                  <IngredientCard
                    rota="/bebidas"
                    key={ index }
                    index={ index }
                    urlImage={ urlImage }
                    name={ ingr.strIngredient1 }
                  />);
              })}
            </section>
            <Footer />
          </div>
        )}
    </div>
  );
}

export default ExploreDrinksByIngredients;
