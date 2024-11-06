import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextWithIcon from '../textWithIcon'; // Adjust the import path accordingly
import WbSunnyIcon from '@mui/icons-material/WbSunny';

describe('TextWithIcon', () => {
  test('renders TextWithIcon component with icon and text', () => {
    render(<TextWithIcon icon={<WbSunnyIcon />} text="Sunny" />);

    expect(screen.getByText('Sunny')).toBeInTheDocument();

    expect(screen.getByTestId('WbSunnyIcon')).toBeInTheDocument();
  });
});
