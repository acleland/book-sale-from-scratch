import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Should render list of books', async () => {
    render(<App />);

    const heading = screen.getByText('Superlative Books');
    expect(heading).toBeInTheDocument();
  });
});
