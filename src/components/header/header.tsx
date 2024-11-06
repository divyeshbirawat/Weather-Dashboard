import React from 'react';
import { Typography, Box } from '@mui/material';
import SearchBar from '../searchBar/searchBar';
import ToggleTheme from '../toggleTheme/toggleTheme';
import { HeaderProps } from './header.types';

const Header: React.FC<HeaderProps> = ({ handleSearch }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      flexDirection={{ xs: 'column', sm: 'row' }}
      sx={{
        background: 'linear-gradient(90deg, #000000 0%, #4c5157 0%)',
        color: 'white',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        borderRadius: '0 0 12px 12px',
        gap: { xs: 1, sm: 2 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.6rem', sm: '1.8rem' },
          marginBottom: { xs: 1, sm: 0 },
        }}
      >
        DynaWeather
      </Typography>
      <Box display="flex" alignItems="center" gap={2} flexDirection="row" flexWrap="wrap">
        <SearchBar onSearch={handleSearch} />
        <ToggleTheme />
      </Box>
    </Box>
  );
};

export default Header;
