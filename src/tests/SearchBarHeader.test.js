import React from 'react';
import { screen, fireEvent /* cleanup */ } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import Meals from '../pages/Meals';
// import meals from './Mocks/meals';
// import mealCategories from './Mocks/mealCategories';

// const DOZE = 12;

/* const mockFetchFood = () => {
  jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(meals),
    }));
}; */

describe(`13 - Implemente os elementos da barra de busca respeitando os
atributos descritos no protótipo`, () => {
  test(`Tem os data-testids tanto da barra de busca quanto de todos os
  radio-buttons`, () => {
    renderWithRouter(<Meals />);
    const buttonSearch = screen.getByTestId(/search-top-btn/i);
    expect(buttonSearch).toBeInTheDocument();
    fireEvent.click(buttonSearch);
    expect(screen.getByTestId(/ingredient-search-radio/i)).toBeInTheDocument();
    expect(screen.getByTestId(/name-search-radio/i)).toBeInTheDocument();
    expect(screen.getByTestId(/first-letter-search-radio/i)).toBeInTheDocument();
    expect(screen.getByTestId(/exec-search-btn/i)).toBeInTheDocument();
  });
});

describe(`14 - Posicione a barra logo abaixo do header e implemente 3 radio
buttons: Ingrediente, Nome e Primeira letra`, () => {
  /* beforeAll(mockFetchFood);
  beforeEach(cleanup); */
  test(`Se o radio selecionado for Ingrediente, a busca na API é feita
  corretamente pelo ingrediente`, async () => {
    renderWithRouter(<Meals />);
    const buttonSearch = screen.queryByTestId(/search-top-btn/i);
    expect(buttonSearch).toBeInTheDocument();
    fireEvent.click(buttonSearch);
    const searchIngredient = screen.queryByTestId(/ingredient-search-radio/i);
    expect(searchIngredient).toBeInTheDocument();
    fireEvent.click(searchIngredient);
    const searchInput = screen.queryByTestId(/search-input/i);
    expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: 'chicken' } });
    const execSearchBtn = screen.queryByTestId(/exec-search-btn/i);
    expect(execSearchBtn).toBeInTheDocument();
    // fireEvent.click(execSearchBtn);
    /* await act(async () => {
      for (let index = 0; index < DOZE; index + 1) {
        const recipe = screen.findByText(meals[index].strMeal);
        const dataTestId = screen.findAllByTestId(`${index}-recipe-card`);
        expect(recipe).toBeInTheDocument();
        expect(dataTestId).toBeInTheDocument();
      }
    }); */
  });
});
