import React from 'react';

function Login() {
  return (
    <div>
      <input
        type="email"
        data-testid="email-input"
        onChange={ () => {} }
      />
      <input
        type="password"
        data-testid="password-input"
        onChange={ () => {} }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        onClick
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
