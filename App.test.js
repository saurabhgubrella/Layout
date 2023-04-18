import { render, screen } from '@testing-library/react';
import App from './App';

test('header renders with react testing tutorials', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is React Testing Tutorial/i);
  expect(linkElement).toBeInTheDocument();
});
