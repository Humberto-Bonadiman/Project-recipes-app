import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

export default function Provider({ children }) {
  const [apiMeals, setApiMeals] = useState([]);
  const [apiDrinks, setApiDrinks] = useState([]);
  const [categoryMeals, setCategoryMeals] = useState([]);
  const [categoryDrinks, setCategoryDrinks] = useState([]);

  const context = {
    apiMeals,
    setApiMeals,
    apiDrinks,
    setApiDrinks,
    categoryMeals,
    setCategoryMeals,
    categoryDrinks,
    setCategoryDrinks,
  };

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
