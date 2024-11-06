import { useDispatch } from 'react-redux';
import { addCity, setLoading, setError } from '../../store/weatherSlice';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const useFetchWeather = () => {
  const dispatch = useDispatch();

  const fetchWeather = async (city: string) => {
    // Get the weather data object from localStorage
    const allCitiesData = localStorage.getItem('weather_data');
    const citiesData = allCitiesData ? JSON.parse(allCitiesData) : {};

    // Check if the city data is already in the stored object
    if (citiesData[city]) {
      // If cached data exists for the city, dispatch it to the state
      dispatch(addCity(citiesData[city]));
    } else {
      dispatch(setLoading(true));
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
          },
        });

        // Formatting the API response to match the CityData structure
        const cityData = {
          name: response.data.name,
          weatherData: {
            main: {
              temp: response.data.main.temp,
              temp_min: response.data.main.temp_min,
              temp_max: response.data.main.temp_max,
              humidity: response.data.main.humidity,
            },
            wind: {
              speed: response.data.wind.speed,
            },
            weather: response.data.weather,
          },
        };

        dispatch(addCity(cityData));

        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setLoading(false));

        // Handling different error scenarios
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 404) {
            dispatch(setError('City not found.'));
          } else {
            dispatch(setError('Server error. Please try again later.'));
          }
        } else if (axios.isAxiosError(error) && error.request) {
          dispatch(setError('No response from the server. Please check your internet connection.'));
        } else {
          dispatch(setError('An unexpected error occurred.'));
        }
      }
    }
  };

  return fetchWeather;
};

export default useFetchWeather;
