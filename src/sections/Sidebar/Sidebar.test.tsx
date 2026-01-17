import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sidebar from './Sidebar';
import { RecoilRoot } from 'recoil';

describe('Sidebar', () => {
  it('should render the sidebar', () => {
    render(
      <RecoilRoot>
        <Sidebar />
      </RecoilRoot>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should open the sidebar when the state is true', () => {
    render(
      <RecoilRoot>
        <Sidebar />
      </RecoilRoot>
    );
    // Simulate opening the sidebar
    userEvent.click(screen.getByRole('button', { name: /open sidebar/i }));
    expect(screen.getByRole('navigation')).toHaveClass('MuiDrawer-paperAnchorLeft');
  });

  it('should close the sidebar when the state is false', () => {
    render(
      <RecoilRoot>
        <Sidebar />
      </RecoilRoot>
    );
    // Simulate closing the sidebar
    userEvent.click(screen.getByRole('button', { name: /close sidebar/i }));
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });
});
