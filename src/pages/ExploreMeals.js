import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreMeals() {
  const history = useHistory();

  async function aleatoryMealFetch() {
    const urlFetch = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const response = await urlFetch.json();
    history.push(`/comidas/${response.meals[0].idMeal}`);
  }

  return (
    <div>
      <Header title="Explorar Comidas" />
      <button
        data-testid="explore-by-ingredient"
        type="button"
        onClick={ () => history.push('/explorar/comidas/ingredientes') }
      >
        Por Ingredientes
      </button>
      <button
        data-testid="explore-by-area"
        type="button"
        onClick={ () => history.push('/explorar/comidas/area') }
      >
        Por Local de Origem
      </button>
      <button
        data-testid="explore-surprise"
        type="button"
        onClick={ aleatoryMealFetch }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

export default ExploreMeals;
