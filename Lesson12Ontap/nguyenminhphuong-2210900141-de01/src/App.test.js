import { render, screen } from '@testing-library/react';
import NmpApp from './NmpApp';

test('renders learn react link', () => {
  render(<NmpApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
