import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBarHeader from './SearchBarHeader';
import '../styles/Header.css';

function Header({ title, showButton }) {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <>
      <header className="header">
        <Link to="/perfil">
          <button
            type="button"
            className="icon-btn"
          >
            <img
              className="icon-btn-img"
              data-testid="profile-top-btn"
              src={ profileIcon }
              alt="Ícone do perfil"
            />
          </button>
        </Link>
        <h4 className="page-title" data-testid="page-title">{ title }</h4>
        { showButton
          && (
            <button
              type="button"
              className="icon-btn"
              onClick={ () => setShowSearchBar(!showSearchBar) }
            >
              <img
                className="icon-btn-img"
                data-testid="search-top-btn"
                src={ searchIcon }
                alt="Ícone de pesquisa"
              />
            </button>
          )}
      </header>
      { showSearchBar && <SearchBarHeader />}
    </>
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
