import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityData, WeatherState } from '../components/weatherDashboard/weatherDashboard.types';


const initialState: WeatherState = {
  cities: {},
  loading: false,
  error: null,
};

// Function to get cached city data from localStorage
const getCachedCityData = (): { [city: string]: CityData } => {
  const cachedData = localStorage.getItem('weather_data');
  return cachedData ? JSON.parse(cachedData) : {};
};

// Function to save all city data to localStorage
const saveCitiesToCache = (cities: { [city: string]: CityData }) => {
  localStorage.setItem('weather_data', JSON.stringify(cities));
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<CityData>) => {
      // Add city to the cities object in state
      state.cities[action.payload.name] = action.payload;
      saveCitiesToCache(state.cities);
    },
    removeCity: (state, action: PayloadAction<string>) => {
      // Remove city from the cities object in state
      delete state.cities[action.payload];
      saveCitiesToCache(state.cities);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    initializeCitiesFromCache: (state) => {
      // Initialize the state with data from localStorage
      const citiesFromCache = getCachedCityData();
      state.cities = citiesFromCache;
    },
    clearError(state) { state.error = null;}
  },
});

export const { addCity, removeCity, setLoading, setError, initializeCitiesFromCache, clearError } = weatherSlice.actions;
export default weatherSlice.reducer;
