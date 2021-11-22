import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Login.css';
import appLogo from '../images/recipe-app-logo.png';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (userEmail) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(userEmail);
  };

  const handleClick = () => {
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  };

  const MIN_LENGTH = 7;
  return (
    <main>
      <img
        src={ appLogo }
        alt="Logotipo"
        className="logo"
      />
      <form className="login-form">
        <input
          type="email"
          data-testid="email-input"
          placeholder="Email"
          className="email-input"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          className="password-input"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          className="login-submit-btn"
          onClick={ handleClick }
          disabled={ !(isEmailValid(email) && password.length >= MIN_LENGTH) }
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
