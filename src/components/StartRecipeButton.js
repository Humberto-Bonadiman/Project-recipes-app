import React from 'react';
import '../styles/StartRecipeButton.css';

function StartRecipeButton() {
  return (
    <section>
      <button
        data-testid="start-recipe-btn"
        type="button"
        className="start-recipe-btn"
      >
        Iniciar Receita
      </button>
    </section>
  );
}
export default StartRecipeButton;
