import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Biere from './Biere';

describe('Biere', () => {
  it('should display beer information', () => {
    render(<Biere />);
    const beerName = screen.getByText(/Die Biere 2024/i);
    expect(beerName).toBeInTheDocument();
  });

  it('should display rating functionality', () => {
    render(<Biere />);
    const ratingElement = screen.getByText(/Deine Bewertung/i);
    expect(ratingElement).toBeInTheDocument();
  });

  it('should update rating on click', () => {
    render(<Biere />);
    const ratingElement = screen.getByText(/Deine Bewertung/i);
    fireEvent.click(ratingElement);
    const updatedRating = screen.getByText(/Geschmack/i);
    expect(updatedRating).toBeInTheDocument();
  });
});
