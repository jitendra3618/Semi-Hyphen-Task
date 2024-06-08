import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const Form: React.FC = () => {
  return (
    <Box component="form">
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" type="email" fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default Form;
