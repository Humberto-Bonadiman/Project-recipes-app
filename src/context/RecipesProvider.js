import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

export default function Provider({ children }) {
  const [apiMeals, setApiMeals] = useState([]);
  const [apiDrinks, setApiDrinks] = useState([]);

  const context = {
    apiMeals,
    setApiMeals,
    apiDrinks,
    setApiDrinks,
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
