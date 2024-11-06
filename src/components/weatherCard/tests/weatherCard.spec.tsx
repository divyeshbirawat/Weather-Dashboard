import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherCard from '../weatherCard';

const mockCityData = {
  name: 'Vadodara',
  weatherData: {
    main: {
      temp: 30,
      humidity: 70,
      temp_min: 25,
      temp_max: 35
    },
    wind: {
      speed: 5
    },
    weather: [
      { description: 'clear sky' }
    ]
  }
};

const mockHandleRemoveCity = jest.fn();

describe('WeatherCard', () => {
  test('renders WeatherCard component with city data', () => {
    render(<WeatherCard cityData={mockCityData} handleRemoveCity={mockHandleRemoveCity} />);
    
    // Check if city name is rendered
    expect(screen.getByText('Vadodara')).toBeInTheDocument();
    
    // Check if weather details are rendered
    expect(screen.getByText('30°C')).toBeInTheDocument();
    expect(screen.getByText('Min: 25°C')).toBeInTheDocument();
    expect(screen.getByText('Max: 35°C')).toBeInTheDocument();
    expect(screen.getByText('Humidity: 70%')).toBeInTheDocument();
    expect(screen.getByText('Wind Speed: 5 m/s')).toBeInTheDocument();
    expect(screen.getByText('Clear Sky')).toBeInTheDocument();
  });

  test('calls handleRemoveCity when close button is clicked', () => {
    render(<WeatherCard cityData={mockCityData} handleRemoveCity={mockHandleRemoveCity} />);
    
    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);
    
    expect(mockHandleRemoveCity).toHaveBeenCalledWith('Vadodara');
  });
});
