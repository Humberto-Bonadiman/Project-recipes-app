import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinks() {
  const history = useHistory();

  async function aleatoryDrinkFetch() {
    const urlFetch = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const response = await urlFetch.json();
    history.push(`/bebidas/${response.drinks[0].idDrink}`);
  }

  return (
    <div>
      <Header title="Explorar Bebidas" />
      <button
        data-testid="explore-by-ingredient"
        type="button"
        onClick={ () => history.push('/explorar/bebidas/ingredientes') }
      >
        Por Ingredientes
      </button>
      <button
        data-testid="explore-surprise"
        type="button"
        onClick={ aleatoryDrinkFetch }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
