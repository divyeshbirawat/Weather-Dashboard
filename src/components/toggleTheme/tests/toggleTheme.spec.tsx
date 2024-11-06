import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleTheme from '../toggleTheme'; // Adjust the import path accordingly
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer, { toggleDarkMode } from '../../../store/themeSlice';

const mockStore = configureStore({
  reducer: {
    theme: themeReducer
  }
});

interface RenderWithProvidersProps {
  ui: React.ReactElement;
}

const renderWithProviders = ({ ui }: RenderWithProvidersProps) => {
  return render(<Provider store={mockStore}>{ui}</Provider>);
};

describe('ToggleTheme', () => {
  test('renders ToggleTheme component with initial state', () => {
    renderWithProviders({ ui: <ToggleTheme /> });
    
    // Check if both LightModeIcon and DarkModeIcon are rendered
    expect(screen.getByTestId('LightModeIcon')).toBeInTheDocument();
    expect(screen.getByTestId('DarkModeIcon')).toBeInTheDocument();
    
    // Check the initial state of the switch (assuming initial state is light mode)
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  test('toggles the theme mode when switch is clicked', () => {
    renderWithProviders({ ui: <ToggleTheme /> });
    
    // Toggle the switch
    const themeSwitch = screen.getByRole('checkbox');
    fireEvent.click(themeSwitch);
    
    // Check if the switch is checked (dark mode)
    expect(themeSwitch).toBeChecked();
    
    // Toggle back to light mode
    fireEvent.click(themeSwitch);
    expect(themeSwitch).not.toBeChecked();
  });
});
