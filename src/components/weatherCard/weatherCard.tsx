import React from "react";
import { Box, Card, CardContent, Typography, IconButton, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import TextWithIcon from "./textWithIcon";
import { WeatherCardProps } from "./weatherCard.types";

const WeatherCard: React.FC<WeatherCardProps> = ({
  cityData,
  handleRemoveCity,
}) => {
  const { name, weatherData } = cityData;
  const { temp, humidity, temp_min, temp_max } = weatherData.main;
  const { speed } = weatherData.wind;
  const description = weatherData.weather[0]?.description;
  const icon = weatherData.weather[0]?.icon;

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 345,
        height: 'fit-content',
        borderRadius: 2,
        boxShadow: 3,
        mt: 2,
        position: "relative",
      }}
    >
      <CardContent>
        <IconButton
          aria-label="close"
          color="error"
          onClick={() => handleRemoveCity(name)}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" component="div" gutterBottom>
          {name}
        </Typography>

        <TextWithIcon
          sx={{ p: { fontSize: "46px !important" } }}
          text={`${temp}°C`}
        />
        <TextWithIcon
          icon={<Avatar src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={`${description}`} sx={{ mr: 1 }} />}
          text={`${description}`}
          sx={{ textTransform: "capitalize" }}
        />
        <Box display="flex" gap="2rem">
          <TextWithIcon
            icon={<WbSunnyIcon sx={{ mr: 1 }} />}
            text={`Min: ${temp_min}°C`}
          />
          <TextWithIcon
            icon={<WbSunnyIcon sx={{ mr: 1 }} />}
            text={`Max: ${temp_max}°C`}
          />
        </Box>
        <TextWithIcon
          icon={<OpacityIcon sx={{ mr: 1 }} />}
          text={`Humidity: ${humidity}%`}
        />
        <TextWithIcon
          icon={<AirIcon sx={{ mr: 1 }} />}
          text={`Wind Speed: ${speed} m/s`}
        />
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
