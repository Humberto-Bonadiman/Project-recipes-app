import React, { useState } from 'react';

function SearchBarHeader() {
  const [searchType, setSearchType] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (value) => {
    setSearchType(value);
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
          onChange={ ({ target: { value } }) => handleChange(value) }
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
          onChange={ ({ target: { value } }) => handleChange(value) }
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
          onChange={ ({ target: { value } }) => handleChange(value) }
        />
        Primeira letra
      </label>
      <br />
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBarHeader;
