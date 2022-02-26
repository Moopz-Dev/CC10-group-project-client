import React from 'react';
import Header from '../../components/utils/Header';
import { Navbar } from '../../components/utils/Navbar';
import MediaCard from '../../components/utils/MediaCard';
import SliderStory from '../../components/utils/SliderStory';
import { Box, Container } from '@mui/material';

const Home = () => {
  return (
    <>
      <Header />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px' }}
      >
        <SliderStory />
        <MediaCard />
      </Box>
      <Navbar />
    </>
  );
};

export default Home;
