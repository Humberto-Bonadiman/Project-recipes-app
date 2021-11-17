import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientCard from '../components/IngredientCard';

function ExploreDrinksByIngredients() {
  const [drinksIngredient, setDrinksIngredient] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      const MAX_LENGTH = 12;
      const MIN_LENGTH = 0;
      const urlFetch = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      const response = await urlFetch.json();
      const result = response.drinks;
      setDrinksIngredient(result.slice(MIN_LENGTH, MAX_LENGTH));
    };
    fetchDrinks();
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
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
      <Footer />
    </div>
  );
}

export default ExploreDrinksByIngredients;
