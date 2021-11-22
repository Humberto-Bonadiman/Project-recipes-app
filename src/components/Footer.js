import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import RecipesContext from '../context/RecipesContext';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';

function Footer() {
  const { setShowAll, setShowFilter, setSaveIngredient } = useContext(RecipesContext);
  const history = useHistory();
  return (
    <footer
      className="footer"
      data-testid="footer"
    >
      <button
        type="button"
        className="icon-btn"
        onClick={ () => {
          setShowAll(true);
          setShowFilter(false);
          setSaveIngredient('');
          history.push('/bebidas');
        } }
      >
        <img
          className="icon-btn-img"
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="Ícone do perfil"
        />
      </button>
      <button
        type="button"
        className="icon-btn"
        onClick={ () => history.push('/explorar') }
      >
        <img
          className="icon-btn-img"
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="Ícone do perfil"
        />
      </button>
      <button
        type="button"
        className="icon-btn"
        onClick={ () => {
          setShowAll(true);
          setShowFilter(false);
          setSaveIngredient('');
          history.push('/comidas');
        } }
      >
        <img
          className="icon-btn-img"
          data-testid="food-bottom-btn"
          src={ mealIcon }
          alt="Ícone do perfil"
        />
      </button>
    </footer>
  );
}

export default Footer;
