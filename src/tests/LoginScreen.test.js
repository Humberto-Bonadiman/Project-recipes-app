/* import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './RenderWithRouter';
import About from '../components/About';

describe('2 - Teste o componente <About.js />', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const title = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(title).toBeInTheDocument();
  });

  // Fonte getByText: https://testing-library.com/docs/queries/about#textmatch
  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const checkOne = screen.getByText((content, element) => element.tagName.toLowerCase()
      === 'p' && content.startsWith('This'));
    expect(checkOne).toBeInTheDocument();
    const checkTwo = screen.getByText((content, element) => element.tagName.toLowerCase()
      === 'p' && content.startsWith('One'));
    expect(checkTwo).toBeInTheDocument();
  });

  test('Teste se a página contém a imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const srcImage = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const pokedexImg = screen.getByRole('img');
    expect(pokedexImg).toHaveAttribute('src', srcImage);
  });
});
 */
import React from 'react';
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
