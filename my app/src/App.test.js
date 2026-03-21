import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the hero message', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /lightweight launchpad/i })).toBeInTheDocument();
  });

  it('lists starter highlights', () => {
    render(<App />);
    expect(screen.getByText(/fast refresh/i)).toBeInTheDocument();
  });
});
