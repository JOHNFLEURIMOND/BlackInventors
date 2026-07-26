import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const routerFutureFlags = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

describe('app navigation', () => {
  it('navigates from the archive grid to an inventor detail page', async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter future={routerFutureFlags}>
        <App />
      </BrowserRouter>
    );

    await screen.findByRole('link', {
      name: /view details for lewis latimer/i,
    });

    await user.click(screen.getByRole('link', { name: /view details for lewis latimer/i }));

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /lewis latimer/i,
      })
    ).toBeTruthy();
    expect(screen.getByRole('link', { name: /back to archive/i })).toBeTruthy();
  });
});
