import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Error from '../error'; // Adjust the import path accordingly
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

describe('Error', () => {
  test('renders Error component with message', () => {
    const message = 'An error occurred';
    render(<Error message={message} />);
    
    expect(screen.getByText(message)).toBeInTheDocument();
    
    expect(screen.getByTestId('ErrorOutlineIcon')).toBeInTheDocument();
  });
});
