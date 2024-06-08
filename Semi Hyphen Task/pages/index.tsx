import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Box, Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to our Agency
          </Typography>
          {/* Add other components and content here */}
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
