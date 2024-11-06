export interface WeatherData {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    description: string;
    [key: string]: string | number;
  }[];
}

export interface CityData {
  name: string;
  weatherData: WeatherData;
}

export interface WeatherState {
  cities: { [city: string]: CityData };
  loading: boolean;
  error: string | null;
}
