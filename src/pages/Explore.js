import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Explore.css';

function Explore() {
  const history = useHistory();
  return (
    <div className="body-background">
      <Header title="Explorar" />
      <div className="explore">
        <button
          className="explore-btn"
          type="button"
          data-testid="explore-food"
          onClick={ () => history.push('/explorar/comidas') }
        >
          Explorar Comidas
        </button>
        <button
          className="explore-btn"
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explorar/bebidas') }
        >
          Explorar Bebidas
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
