import React from 'react';
import { Route, Switch } from 'react-router';
import DrinkRecipeDetails from '../pages/DrinkRecipeDetails';
import MealRecipeDetails from '../pages/MealRecipeDetails';
import Drinks from '../pages/Drinks';
import Explore from '../pages/Explore';
import Login from '../pages/Login';
import Meals from '../pages/Meals';
import MealRecipeInProgress from '../pages/MealRecipeInProgress';
import DrinkRecipeInProgress from '../pages/DrinkRecipeInProgress';
import ExploreMeals from '../pages/ExploreMeals';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreIngredients from '../pages/ExploreIngredients';
import ExploreOrigin from '../pages/ExploreOrigin';
import Profile from '../pages/Profile';
import RecipesMade from '../pages/RecipesMade';
import FavoritesRecipes from '../pages/FavoritesRecipes';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Meals } />
      <Route exact path="/bebidas" component={ Drinks } />
      <Route exact path="/comidas/:idMeal" component={ MealRecipeDetails } />
      <Route exact path="/bebidas/:idDrink" component={ DrinkRecipeDetails } />
      <Route
        exact
        path="/comidas/:idMeal/in-progress"
        component={ MealRecipeInProgress }
      />
      <Route
        exact
        path="/bebidas/:idDrink/in-progress"
        component={ DrinkRecipeInProgress }
      />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/explorar/comidas" component={ ExploreMeals } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ ExploreIngredients }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ ExploreIngredients }
      />
      <Route exact path="/explorar/comidas/area" component={ ExploreOrigin } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/receitas-feitas" component={ RecipesMade } />
      <Route exact path="/receitas-favoritas" component={ FavoritesRecipes } />
    </Switch>
  );
}

export default Routes;
