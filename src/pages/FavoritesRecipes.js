import React, { useState } from 'react';
import FilterButtons from '../components/FilterButtons';
import Header from '../components/Header';
import RecipesFavoriteCard from '../components/RecipesFavoriteCard';

function FavoritesRecipes() {
  const [showAll, setShowAll] = useState(true);
  const [showMeals, setShowMeals] = useState(false);
  const [showDrinks, setShowDrinks] = useState(false);
  const [toggleFavorite, setToggleFavorite] = useState();
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  return (
    <div className="body-background">
      <Header title="Receitas Favoritas" />
      <FilterButtons
        setShowAll={ setShowAll }
        setShowMeals={ setShowMeals }
        setShowDrinks={ setShowDrinks }
      />
      <section className="recipes-list">
        {showAll && favoriteRecipes.map((recipe, index) => (
          <RecipesFavoriteCard
            key={ index }
            recipe={ recipe }
            index={ index }
            setToggleFavorite={ setToggleFavorite }
            toggleFavorite={ toggleFavorite }
          />
        ))}
        {showMeals && favoriteRecipes
          .filter(({ type }) => type === 'comida').map((recipeMeal, index) => (
            <RecipesFavoriteCard
              key={ index }
              recipe={ recipeMeal }
              index={ index }
              setToggleFavorite={ setToggleFavorite }
              toggleFavorite={ toggleFavorite }
            />
          ))}
        {showDrinks && favoriteRecipes
          .filter(({ type }) => type === 'bebida').map((recipeDrink, index) => (
            <RecipesFavoriteCard
              key={ index }
              recipe={ recipeDrink }
              index={ index }
              setToggleFavorite={ setToggleFavorite }
              toggleFavorite={ toggleFavorite }
            />
          ))}
      </section>
    </div>
  );
}

export default FavoritesRecipes;
