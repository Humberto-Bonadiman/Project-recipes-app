import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Login from '../pages/Login';

const VALID_EMAIL = 'email@email.com';
const VALID_PASSWORD = 'minhasenhae1234';

describe(`2 - Crie todos os elementos que devem respeitar os
atributos descritos no protótipo para a tela de login`, () => {
  it('Se a tela de login incia em "/"', () => {
    const { history } = renderWithRouter(<Login />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('Tem os data-testids email-input, password-input e login-submit-btn', () => {
    renderWithRouter(<Login />);
    expect(screen.getByTestId(/email-input/i)).toBeInTheDocument();
    expect(screen.getByTestId(/password-input/i)).toBeInTheDocument();
    expect(screen.getByTestId(/login-submit-btn/i)).toBeInTheDocument();
  });
});

/* A resolução desta parte veio através de consulta ao stackOverflow
Fonte: https://stackoverflow.com/questions/62473970/best-way-to-test-input-value-in-dom-testing-library-or-react-testing-library */
describe(`3 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever seu email
no input de email`, () => {
  test('É possível escrever o email', () => {
    renderWithRouter(<Login />);
    const inputEmail = screen.getByTestId(/email-input/i);
    fireEvent.change(inputEmail, { target: { value: 'email@mail.com' } });
    expect(inputEmail).toHaveValue('email@mail.com');
  });
});

describe(`4 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever
sua senha no input de senha`, () => {
  test('É possível escrever a senha', () => {
    renderWithRouter(<Login />);
    const inputPassword = screen.getByTestId(/password-input/i);
    fireEvent.change(inputPassword, { target: { value: 'minhasenhae1234' } });
    expect(inputPassword).toHaveValue('minhasenhae1234');
  });
});

describe(`5 - Desenvolva a tela de maneira que o formulário só seja
válido após um email válido e uma senha de mais
de 6 caracteres serem preenchidos`, () => {
  test('O botão deve estar desativado se o email for inválido', () => {
    renderWithRouter(<Login />);
    const inputEmail = screen.getByTestId(/email-input/i);
    const inputPassword = screen.getByTestId(/password-input/i);
    const button = screen.getByTestId(/login-submit-btn/i);

    fireEvent.change(inputEmail, { target: { value: 'email' } });
    fireEvent.change(inputPassword, { target: { value: VALID_PASSWORD } });
    expect(button).toBeDisabled();

    fireEvent.change(inputEmail, { target: { value: 'email@com@' } });
    fireEvent.change(inputPassword, { target: { value: VALID_PASSWORD } });
    expect(button).toBeDisabled();

    fireEvent.change(inputEmail, { target: { value: 'emailcom@' } });
    fireEvent.change(inputPassword, { target: { value: VALID_PASSWORD } });
    expect(button).toBeDisabled();

    fireEvent.change(inputEmail, { target: { value: 'alguem@email.' } });
    fireEvent.change(inputPassword, { target: { value: VALID_PASSWORD } });
    expect(button).toBeDisabled();
  });

  test(`O botão deve estar desativado se a senha deve tiver 6 caracteres ou
  menos`, () => {
    renderWithRouter(<Login />);
    const inputEmail = screen.getByTestId(/email-input/i);
    const inputPassword = screen.getByTestId(/password-input/i);
    const button = screen.getByTestId(/login-submit-btn/i);

    fireEvent.change(inputEmail, { target: { value: VALID_EMAIL } });
    fireEvent.change(inputPassword, { target: { value: '123b5' } });
    expect(button).toBeDisabled();
  });

  test('O botão deve estar ativado se o email e a senha forem válidos', () => {
    renderWithRouter(<Login />);
    const inputEmail = screen.getByTestId(/email-input/i);
    const inputPassword = screen.getByTestId(/password-input/i);
    const button = screen.getByTestId(/login-submit-btn/i);

    fireEvent.change(inputEmail, { target: { value: VALID_EMAIL } });
    fireEvent.change(inputPassword, { target: { value: VALID_PASSWORD } });
    expect(button).toBeEnabled();
  });
});

describe(`6 - Salve 2 tokens no localStorage após a submissão, identificados pelas
chaves mealsToken e cocktailsToken`, () => {
  test(`Após a submissão mealsToken e cocktailsToken devem estar salvos
  em localStorage`, async () => {
    renderWithRouter(<Login />);
    const inputEmail = screen.getByTestId(/email-input/i);
    const inputPassword = screen.getByTestId(/password-input/i);
    const buttonLogin = screen.getByTestId(/login-submit-btn/i);
    expect(buttonLogin).toBeInTheDocument();
    expect(buttonLogin).toBeDisabled();

    fireEvent.change(inputEmail, { target: { value: VALID_EMAIL } });
    fireEvent.change(inputPassword, { target: { value: VALID_PASSWORD } });
    expect(buttonLogin).toBeEnabled();
    fireEvent.click(buttonLogin);
    expect(localStorage.getItem('mealsToken')).toBe('1');
    expect(localStorage.getItem('cocktailsToken')).toBe('1');
  });
});

describe(`7 - Salve o e-mail da pessoa usuária no localStorage na chave user
após a submissão`, () => {
  test('Após a submissão a chave user deve estar salva em localStorage', () => {
    renderWithRouter(<Login />);
    const inputEmail = screen.getByTestId(/email-input/i);
    const inputPassword = screen.getByTestId(/password-input/i);

    fireEvent.change(inputEmail, { target: { value: VALID_EMAIL } });
    fireEvent.change(inputPassword, { target: { value: VALID_PASSWORD } });
    fireEvent.click(screen.getByTestId('login-submit-btn'));
    expect(JSON.parse(localStorage.getItem('user')))
      .toStrictEqual({ email: VALID_EMAIL });
  });
});

describe(`8 - Redirecione a pessoa usuária para a tela principal de receitas de
comidas após a submissão e validação com sucesso do login`, () => {
  it('A rota muda para a tela principal de receitas de comidas', () => {
    const { history } = renderWithRouter(<Login />);
    const inputEmail = screen.getByTestId(/email-input/i);
    const inputPassword = screen.getByTestId(/password-input/i);

    fireEvent.change(inputEmail, { target: { value: VALID_EMAIL } });
    fireEvent.change(inputPassword, { target: { value: VALID_PASSWORD } });
    userEvent.click(screen.getByTestId('login-submit-btn'));
    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');
  });
});
