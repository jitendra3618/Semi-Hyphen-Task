import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" py={3} textAlign="center" bgcolor="#f1f1f1">
      <Typography variant="body2" color="textSecondary">
        © 2024 Agency. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
