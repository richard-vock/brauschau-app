import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import { SnackbarProvider } from 'notistack';

describe('Notifications', () => {
  it('should render without crashing', () => {
    render(
      <SnackbarProvider>
        <Notifications />
      </SnackbarProvider>
    );
    expect(screen.getByText('Notification demo (random IT jokes :)')).toBeInTheDocument();
  });
});
