import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../header';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../../../store/themeSlice';

const mockStore = configureStore({
  reducer: {
    theme: themeReducer
  }
});

const mockHandleSearch = jest.fn();

interface RenderWithProvidersProps {
  ui: React.ReactElement;
}

const renderWithProviders = ({ ui }: RenderWithProvidersProps) => {
  return render(
    <Provider store={mockStore}>
      {ui}
    </Provider>
  );
};

describe('Header', () => {
  beforeEach(() => {
    mockHandleSearch.mockClear();
  });

  test('renders Header component with title and child components', () => {
    renderWithProviders({ ui: <Header handleSearch={mockHandleSearch} /> });

    // Check if the header title is rendered
    expect(screen.getByText('DynaWeather')).toBeInTheDocument();

    // Check if the SearchBar and ToggleTheme components are rendered
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('search-button')).toBeInTheDocument();
    expect(screen.getByTestId('theme-switch')).toBeInTheDocument();
  });

  test('calls handleSearch when a search is performed', () => {
    renderWithProviders({ ui: <Header handleSearch={mockHandleSearch} /> });

    const input = screen.getByTestId('search-input');
    const button = screen.getByTestId('search-button');

    fireEvent.change(input, { target: { value: 'Vadodara' } });
    fireEvent.click(button);

    expect(mockHandleSearch).toHaveBeenCalledWith('Vadodara');
  });
});
