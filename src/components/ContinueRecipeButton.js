import React from 'react';
import '../styles/StartRecipeButton.css';

function ContinueRecipeButton() {
  return (
    <section>
      <button
        data-testid="start-recipe-btn"
        type="button"
        className="start-recipe-btn"
      >
        Continuar Receita
      </button>
    </section>
  );
}
export default ContinueRecipeButton;
