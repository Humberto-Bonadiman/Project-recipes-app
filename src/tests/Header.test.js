import React from 'react';
// import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Meals from '../pages/Meals';
import Login from '../pages/Login';

describe(`9 - Implemente os elementos do header na tela principal de receitas,
respeitando os atributos descritos no protótipo`, () => {
  test('Tem os data-testids `profile-top-btn`, `page-title` e `search-top-btn`', () => {
    renderWithRouter(<Meals />);
    expect(screen.getByTestId(/profile-top-btn/i)).toBeInTheDocument();
    expect(screen.getByTestId(/search-top-btn/i)).toBeInTheDocument();
    expect(screen.getByTestId(/page-title/i)).toBeInTheDocument();
  });
});

describe(`10 - Implemente um ícone para a tela de perfil, um título e um ícone
para a busca, caso exista no protótipo`, () => {
  test('Não tem header na tela de login', () => {
    const { history } = renderWithRouter(<Meals />);
    const { pathname } = history.location;
    const titleIcon = screen.getByTestId(/page-title/i);
    expect(titleIcon).toBeInTheDocument();
    const searchIcon = screen.getByTestId(/search-top-btn/i);
    expect(searchIcon).toBeInTheDocument();
    const pageTitle = screen.getByTestId(/page-title/i);
    expect(pageTitle).toBeInTheDocument();
    history.push('/');
    expect(pathname).toBe('/');
    expect('/').not.toContain(titleIcon);
    expect('/').not.toContain(searchIcon);
    expect('/').not.toContain(pageTitle);
  });
});
