import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Rewards Summary App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reward's Summary/i);
  expect(linkElement).toBeInTheDocument();
});
