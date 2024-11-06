import React from 'react';
import { Typography, Box } from '@mui/material';
import { TextWithIconProps } from './weatherCard.types';


const TextWithIcon: React.FC<TextWithIconProps> = ({ icon, text, sx }) => {
  return (
    <Box mb={1}  display="flex" alignItems="center">
      {icon}
      <Typography variant="body1" color="text.secondary" sx={sx}>
        {text}
      </Typography>
    </Box>
  );
};

export default TextWithIcon;
