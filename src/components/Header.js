import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <header>
      <button
        type="button"
        data-testid="profile-top-btn"
      >
        <img
          src={ profileIcon }
          alt="Ícone do perfil"
        />
      </button>
      <h1 data-testid="page-title">Comidas</h1>
      <button
        type="button"
        data-testid="search-top-btn"
      >
        <img
          src={ searchIcon }
          alt="Ícone de pesquisa"
        />
      </button>
    </header>
  );
}

export default Header;
