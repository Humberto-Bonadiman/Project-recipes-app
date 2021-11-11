import React from 'react';
import { useHistory } from 'react-router';
import '../styles/StartRecipeButton.css';

function StartRecipeButton() {
  const history = useHistory();
  const redirect = () => {
    history.push(`${history.location.pathname}/in-progress`);
  };

  return (
    <section>
      <button
        data-testid="start-recipe-btn"
        type="button"
        className="start-recipe-btn"
        onClick={ redirect }
      >
        Iniciar Receita
      </button>
    </section>
  );
}
export default StartRecipeButton;
