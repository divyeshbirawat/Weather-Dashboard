import { CityData } from "../weatherDashboard/weatherDashboard.types";

export interface TextWithIconProps {
  icon?: React.ReactNode;
  text: string | number;
  sx?: object;
}

export interface WeatherCardProps {
  cityData: CityData;
  handleRemoveCity: (cityName: string) => void;
}
