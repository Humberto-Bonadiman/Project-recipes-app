import React from 'react';
import PropTypes from 'prop-types';
import '../styles/FilterButtons.css';

function FilterButtons({ setShowAll, setShowMeals, setShowDrinks }) {
  return (
    <div className="btn-container">
      <button
        className="filter-btn"
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => {
          setShowAll(true);
          setShowMeals(false);
          setShowDrinks(false);
        } }
      >
        All
      </button>
      <button
        className="filter-btn"
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => {
          setShowAll(false);
          setShowMeals(true);
          setShowDrinks(false);
        } }
      >
        Food
      </button>
      <button
        className="filter-btn"
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => {
          setShowAll(false);
          setShowMeals(false);
          setShowDrinks(true);
        } }
      >
        Drinks
      </button>
    </div>
  );
}

FilterButtons.propTypes = {
  setShowAll: PropTypes.func.isRequired,
  setShowMeals: PropTypes.func.isRequired,
  setShowDrinks: PropTypes.func.isRequired,
};

export default FilterButtons;
