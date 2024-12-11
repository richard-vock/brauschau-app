import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should display the title', () => {
    render(<Header />);
    const titleElement = screen.getByText(/Bonner Brauschau/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should toggle theme on button click', () => {
    render(<Header />);
    const themeToggleButton = screen.getByRole('button', { name: /Switch theme/i });
    fireEvent.click(themeToggleButton);
    expect(document.body).toHaveAttribute('data-theme', 'dark');
    fireEvent.click(themeToggleButton);
    expect(document.body).toHaveAttribute('data-theme', 'light');
  });
});
