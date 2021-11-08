import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import RecipesContext from '../context/RecipesContext';
import { callApiMeals, callApiDrinks } from '../services/fetchApi';

function SearchBarHeader() {
  const { setApiMeals, setApiDrinks } = useContext(RecipesContext);
  const [searchType, setSearchType] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();

  const handleClick = async () => {
    if (searchType === 'first-letter' && searchInput.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    if (history.location.pathname === '/comidas') {
      const resultApi = await callApiMeals(searchInput, searchType);
      setApiMeals(resultApi);
      if (!resultApi) {
        return global
          .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      }
      if (resultApi.length === 1) {
        history.push(`/comidas/${resultApi[0].idMeal}`);
      }
    }
    if (history.location.pathname === '/bebidas') {
      const resultApi = await callApiDrinks(searchInput, searchType);
      setApiDrinks(resultApi);
      if (!resultApi) {
        return global
          .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      }
      if (resultApi.length === 1) {
        history.push(`/bebidas/${resultApi[0].idDrink}`);
      }
    }
  };

  return (
    <form>
      <input
        type="text"
        data-testid="search-input"
        onChange={ (e) => setSearchInput(e.target.value) }
        name={ searchInput }
      />
      <br />
      <label htmlFor="ingredient">
        <input
          id="ingredient"
          type="radio"
          name={ searchType }
          data-testid="ingredient-search-radio"
          value="ingredient"
          onChange={ ({ target: { value } }) => setSearchType(value) }
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          id="name"
          type="radio"
          name={ searchType }
          data-testid="name-search-radio"
          value="name"
          onChange={ ({ target: { value } }) => setSearchType(value) }
        />
        Nome
      </label>
      <label htmlFor="first-letter">
        <input
          id="first-letter"
          type="radio"
          name={ searchType }
          data-testid="first-letter-search-radio"
          value="first-letter"
          onChange={ ({ target: { value } }) => setSearchType(value) }
        />
        Primeira letra
      </label>
      <br />
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBarHeader;
