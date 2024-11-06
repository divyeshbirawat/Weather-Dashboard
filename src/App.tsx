import WeatherDashboard from "./components/weatherDashboard/weatherDashboard";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import { useAppSelector } from './utils/hooks';

function App() {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  const theme = createTheme(isDarkMode ? darkTheme : lightTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <WeatherDashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
