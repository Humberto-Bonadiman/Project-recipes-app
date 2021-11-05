import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, showButton }) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <header>
      <Link to="/perfil">
        <button
          type="button"
        >
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="Ícone do perfil"
          />
        </button>
      </Link>
      <h1 data-testid="page-title">{ title }</h1>
      { showButton
        && (
          <button
            type="button"
            onClick={ () => setShowSearchBar(!showSearchBar) }
          >
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Ícone de pesquisa"
            />
          </button>
        )}
      { showSearchBar && (
        <input
          type="text"
          data-testid="search-input"
        />
      )}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showButton: PropTypes.bool,
};

Header.defaultProps = {
  showButton: false,
};

export default Header;
