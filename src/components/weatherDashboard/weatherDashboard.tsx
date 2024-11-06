import React, { Suspense, useEffect, useTransition } from "react";
import { Typography, Box, CircularProgress } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../utils/hooks";
import { RootState } from "../../store";
import { CityData } from "./weatherDashboard.types";
import {
  removeCity,
  initializeCitiesFromCache,
  clearError,
} from "../../store/weatherSlice";
import Header from "../header/header";
import useFetchWeather from "../../utils/apiHooks/useFetchWeather";
import ErrorBoundary from "../errorBoundary/errorBoundary";
import Error from "../error/error";

const WeatherCard = React.lazy(() => import("../weatherCard/weatherCard"));

const WeatherDashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cities, loading, error } = useAppSelector(
    (state: RootState) => state.weather
  );
  const [, startTransition] = useTransition();

  const fetchWeather = useFetchWeather();

  useEffect(() => {
    dispatch(initializeCitiesFromCache());
  }, [dispatch]);

  const handleSearch = (city: string) => {
    dispatch(clearError());
    startTransition(() => {
      fetchWeather(city);
    });
  };

  const handleRemoveCity = (cityName: string) => {
    dispatch(removeCity(cityName));
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center" my={2}>
          <CircularProgress />
        </Box>
      )}
      {error && <Error message={error} />}
      {!loading && !Object.keys(cities).length ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="80%"
          textAlign="center"
          position="relative"
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
              width: "100%",
              height: "100%",
              background: "url('/assets/Weather.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(35px)",
            }}
          />
          <Box position="relative" zIndex="1">
            {" "}
            <Typography variant="h2" gutterBottom>
              Welcome to DynaWeather!
            </Typography>{" "}
            <Typography variant="body1">
              Use the search bar above to look up weather information for any
              city.
            </Typography>
          </Box>
        </Box>
      ) : (
        <Suspense
          fallback={
            <Typography
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Loading weather data...
            </Typography>
          }
        >
          <ErrorBoundary>
            <Box
              display="flex"
              flexWrap="wrap"
              gap="2rem"
              justifyContent="center"
              alignItems={"strecth"}
              height={"80%"}
              sx={{
                background: "url('/assets/weather-bg.jpg')",
                backgroundSize: "40%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {Object.values(cities).map((cityData, index) => {
                return (
                  <WeatherCard
                    key={index}
                    cityData={cityData as CityData}
                    handleRemoveCity={handleRemoveCity}
                  />
                );
              })}
            </Box>
          </ErrorBoundary>
        </Suspense>
      )}
    </>
  );
};

export default WeatherDashboard;
