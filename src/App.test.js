import { render, screen } from '@testing-library/react';
import App from './App';



test('render the page title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Milhões de filmes, séries e pessoas para descobrir. Explore Já/i);
  expect(linkElement).toBeInTheDocument();
});


test('render the filter', () => {
  render(<App />);
  const linkElement = screen.getByText(/FILTRE POR:/i);
  expect(linkElement).toBeInTheDocument();
});





