# DynaWeather Dashboard

## Table of Contents
- [DynaWeather Dashboard](#dynaweather-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Try It Out via: https://dynaweather.netlify.app/](#try-it-out-via-httpsdynaweathernetlifyapp)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Folder Structure](#folder-structure)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Future Enhancements](#future-enhancements)
      - [Detailed Weather Information](#detailed-weather-information)
      - [Geolocation-Based Weather](#geolocation-based-weather)
      - [Historical Weather Data](#historical-weather-data)
    - [Favorites and Persistent Data](#favorites-and-persistent-data)
    - [Weather Alerts](#weather-alerts)
    - [Interactive Map](#interactive-map)
  - [License](#license)

## Try It Out via: https://dynaweather.netlify.app/

## Tech Stack
This project uses the following technologies and libraries:

- **React**: JavaScript library for building user interfaces
- **Redux Toolkit**: State management library
- **Material-UI (MUI)**: React component library for UI elements
- **TypeScript**: Superset of JavaScript for type safety
- **Vite**: Fast development server and build tool
- **Jest**: Testing framework for unit and integration tests
  
## Features
- **Weather Search**: Search for weather in any city using an intuitive search bar.
- **Dynamic Weather Cards**: Each city has a card displaying its current weather, with an option to remove it.
- **Dark Mode**: Toggle between light and dark themes.
- **City Caching**: Caches previously searched cities to improve load times.
- **Error Handling**: Handles errors with custom error boundaries.

## Folder Structure
├── public                  # Public assets
├── src
│   ├── assets              # Static assets (images, icons)
│   ├── components          # React components
│   │   ├── header          # Header component
│   │   ├── weatherCard     # Individual weather card component
│   │   └── errorBoundary   # Error handling component
│   ├── store               # Redux store setup
│   ├── utils               # Helper functions and custom hooks
│   ├── App.tsx             # Main app component
│   ├── index.tsx           # App entry point
│   └── styles              # Global and component-specific styles
├── .env                    # Environment variables
├── tsconfig.json           # TypeScript configuration
└── jest.config.js          # Jest configuration


## Installation
To run this project locally, follow these steps:

1. Clone the repository:
  ```sh
  git clone https://github.com/your-username/weather-dashboard.git
  ```
2. Navigate to the project directory:
  ```sh
  cd weather-dashboard
  ```
3. Execute the below command to install all the required dependancies.
  ```sh
  npm install
  ```
4. Generate API Key from Open Weather's Portal: (https://home.openweathermap.org/api_keys) and paste that key in the .env file inside the project folder.
  
5. Execute the below command to run the project in your local machine.card
  ```sh
  npm run dev
  ```

## Usage
1. Enter the name of the city you want to search for in the search bar.
2. Click the search button.
3. View the current weather conditions and the 5-day forecast for the selected city.


## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
  ```sh
  git checkout -b feature/your-feature-name
  ```
3. Make your changes and commit them:
  ```sh
  git commit -m 'Add some feature'
  ```
4. Push to the branch:
  ```sh
  git push origin feature/your-feature-name
  ```
5. Open a pull request.


## Future Enhancements

#### Detailed Weather Information
Add more detailed information such as humidity, visibility, wind speed, and the forecast for the next few hours or days to the weather information that is shown on each card.

#### Geolocation-Based Weather
Automatically detect the user’s location and show weather data for their current city on load. This would provide a personalized experience and remove the need for manual searching for most users.

#### Historical Weather Data
To make the app more useful for study, incorporate historical weather data so users may see previous city weather trends.

### Favorites and Persistent Data
Allow users to mark specific cities as "favorites" and save this information so that users can visit their preferred spots during different sessions.

### Weather Alerts
Integrate weather alerts for extreme conditions (e.g., storms, high winds) from the OpenWeather API to notify users of significant weather changes that might impact their plans.

### Interactive Map
Add a map interface where users can click on a location to view its weather data. This could be achieved using APIs like Google Maps or Mapbox for an interactive, visual approach.


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.*
