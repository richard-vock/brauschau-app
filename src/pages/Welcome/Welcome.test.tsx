import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Welcome from './Welcome';

describe('Welcome Page', () => {
  it('should display welcome message', () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    expect(screen.getByText('Willkommen zur 5.')).toBeInTheDocument();
    expect(screen.getByText('Bonner Brauschau!')).toBeInTheDocument();
  });

  it('should navigate to beer page when button is clicked', () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    const button = screen.getByRole('button', { name: /Zu den Bieren/i });
    expect(button).toBeInTheDocument();
    button.click();
    expect(window.location.pathname).toBe('/biere');
  });
});
