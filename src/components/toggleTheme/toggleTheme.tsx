import React from 'react';
import { Switch, FormControlLabel, Box } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import { toggleDarkMode } from '../../store/themeSlice';
import { AppDispatch } from '../../store';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ToggleTheme: React.FC = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch: AppDispatch = useAppDispatch();

  const handleThemeChange = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" p={1} sx={{ margin: { xs: 'auto', sm: 0 } }}>
      <LightModeIcon color={isDarkMode ? 'disabled' : 'primary'} />
      <FormControlLabel
        control={
          <Switch
            checked={isDarkMode}
            onChange={handleThemeChange}
            color="primary"
            inputProps={{ 'data-testid': 'theme-switch' } as React.InputHTMLAttributes<HTMLInputElement>}
          />
        }
        label=""
        sx={{ ml: 0.2, mr: 0.2 }}
      />
      <DarkModeIcon color={isDarkMode ? 'primary' : 'disabled'} />
    </Box>
  );
};

export default ToggleTheme;
