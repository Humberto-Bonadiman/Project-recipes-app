import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <Link to="/bebidas">
        <button
          type="button"
          className="icon-btn"
        >
          <img
            className="icon-btn-img"
            data-testid="drinks-bottom-btn"
            src={ drinkIcon }
            alt="Ícone do perfil"
          />
        </button>
      </Link>
      <Link to="/explorar">
        <button
          type="button"
          className="icon-btn"
        >
          <img
            className="icon-btn-img"
            data-testid="explore-bottom-btn"
            src={ exploreIcon }
            alt="Ícone do perfil"
          />
        </button>
      </Link>
      <Link to="/comidas">
        <button
          type="button"
          className="icon-btn"
        >
          <img
            className="icon-btn-img"
            data-testid="food-bottom-btn"
            src={ mealIcon }
            alt="Ícone do perfil"
          />
        </button>
      </Link>
    </footer>
  );
}

export default Footer;
