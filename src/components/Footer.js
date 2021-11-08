import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/bebidas">
        <button
          type="button"
        >
          <img
            data-testid="drinks-bottom-btn"
            src={ drinkIcon }
            alt="Ícone do perfil"
          />
        </button>
      </Link>
      <Link to="/explorar">
        <button
          type="button"
        >
          <img
            data-testid="explore-bottom-btn"
            src={ exploreIcon }
            alt="Ícone do perfil"
          />
        </button>
      </Link>
      <Link to="/comidas">
        <button
          type="button"
        >
          <img
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
