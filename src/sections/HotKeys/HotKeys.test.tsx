import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HotKeys from './HotKeys';

describe('HotKeys', () => {
  it('should display the hotkeys dialog', () => {
    render(<HotKeys />);
    const hotKeysDialog = screen.getByText(/Hot Keys/i);
    expect(hotKeysDialog).toBeInTheDocument();
  });

  it('should toggle theme on hotkey press', () => {
    render(<HotKeys />);
    fireEvent.keyDown(document, { key: 't', altKey: true });
    expect(document.body).toHaveAttribute('data-theme', 'dark');
    fireEvent.keyDown(document, { key: 't', altKey: true });
    expect(document.body).toHaveAttribute('data-theme', 'light');
  });

  it('should toggle sidebar on hotkey press', () => {
    render(<HotKeys />);
    fireEvent.keyDown(document, { key: 's', altKey: true });
    const sidebar = screen.getByRole('navigation');
    expect(sidebar).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 's', altKey: true });
    expect(sidebar).not.toBeInTheDocument();
  });

  it('should toggle hotkeys dialog on hotkey press', () => {
    render(<HotKeys />);
    fireEvent.keyDown(document, { key: 'k', altKey: true });
    const hotKeysDialog = screen.getByText(/Hot Keys/i);
    expect(hotKeysDialog).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'k', altKey: true });
    expect(hotKeysDialog).not.toBeInTheDocument();
  });
});
