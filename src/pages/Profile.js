import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Profile.css';

function Profile() {
  const { email } = JSON.parse(localStorage.getItem('user')) || { user: '' };
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className="body-background">
      <Header title="Perfil" />
      <div className="profile">
        <p
          className="profile-email"
          data-testid="profile-email"
        >
          { email }
        </p>
        <button
          className="profile-btn"
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/receitas-feitas') }
        >
          Receitas Feitas
        </button>
        <button
          className="profile-btn"
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/receitas-favoritas') }
        >
          Receitas Favoritas
        </button>
        <button
          className="profile-btn"
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleLogout }
        >
          Sair
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
