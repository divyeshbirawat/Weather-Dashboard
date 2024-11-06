import React from 'react';
import { Typography, Box } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" p={2}>
      <ErrorOutlineIcon color="error" sx={{ mr: 1 }} />
      <Typography variant="body1" color="error">
        {message}
      </Typography>
    </Box>
  );
};

export default Error;
