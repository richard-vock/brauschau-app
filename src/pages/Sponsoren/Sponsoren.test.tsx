import React from 'react';
import { render, screen } from '@testing-library/react';
import Sponsoren from './Sponsoren';

describe('Sponsoren', () => {
  it('should display sponsor logos', () => {
    render(<Sponsoren />);
    const gsiLogo = screen.getByAltText(/gsi/i);
    const gbcuLogo = screen.getByAltText(/gbcu/i);
    const mashcampLogo = screen.getByAltText(/mashcamp/i);
    const cccLogo = screen.getByAltText(/ccc/i);
    const heinenhofLogo = screen.getByAltText(/heinenhof/i);
    const braubeboLogo = screen.getByAltText(/braubebo/i);
    const reschLogo = screen.getByAltText(/resch/i);
    const alemaniaLogo = screen.getByAltText(/alemania/i);
    const biertastingLogo = screen.getByAltText(/biertasting/i);
    const brauwerkstattLogo = screen.getByAltText(/brauwerkstatt/i);
    const hdwLogo = screen.getByAltText(/hdw/i);
    const braupartnerLogo = screen.getByAltText(/braupartner/i);
    const beerolutionLogo = screen.getByAltText(/beerolution/i);

    expect(gsiLogo).toBeInTheDocument();
    expect(gbcuLogo).toBeInTheDocument();
    expect(mashcampLogo).toBeInTheDocument();
    expect(cccLogo).toBeInTheDocument();
    expect(heinenhofLogo).toBeInTheDocument();
    expect(braubeboLogo).toBeInTheDocument();
    expect(reschLogo).toBeInTheDocument();
    expect(alemaniaLogo).toBeInTheDocument();
    expect(biertastingLogo).toBeInTheDocument();
    expect(brauwerkstattLogo).toBeInTheDocument();
    expect(hdwLogo).toBeInTheDocument();
    expect(braupartnerLogo).toBeInTheDocument();
    expect(beerolutionLogo).toBeInTheDocument();
  });
});
