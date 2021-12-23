import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

export default function Provider({ children }) {
  const [apiMeals, setApiMeals] = useState([]);
  const [apiDrinks, setApiDrinks] = useState([]);
  const [categoryMeals, setCategoryMeals] = useState([]);
  const [categoryDrinks, setCategoryDrinks] = useState([]);
  const [apiFilterMeals, setApiFilterMeals] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [apiFilterDrinks, setApiFilterDrinks] = useState([]);
  const [filterDrinks, setFilterDrinks] = useState('');
  const [filterMeals, setFilterMeals] = useState('');
  const [saveIngredient, setSaveIngredient] = useState('');
  const [loading, setLoading] = useState(false);

  const context = {
    apiMeals,
    setApiMeals,
    apiDrinks,
    setApiDrinks,
    categoryMeals,
    setCategoryMeals,
    categoryDrinks,
    setCategoryDrinks,
    apiFilterMeals,
    setApiFilterMeals,
    showFilter,
    setShowFilter,
    showAll,
    setShowAll,
    apiFilterDrinks,
    setApiFilterDrinks,
    filterDrinks,
    setFilterDrinks,
    filterMeals,
    setFilterMeals,
    saveIngredient,
    setSaveIngredient,
    loading,
    setLoading,
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
