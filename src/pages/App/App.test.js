import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page with navigation link link', () => {
	render(<App />);
	const linkElement = screen.getByLabelText(/navigate to ticket list/i);
	expect(linkElement).toBeInTheDocument();
});
