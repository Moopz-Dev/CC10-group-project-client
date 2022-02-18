import React from 'react';
import Header from '../../components/utils/Header';
import { Navbar } from '../../components/utils/Navbar';
import MediaCard from '../../components/utils/MediaCard';
import CarouselStory from '../../components/utils/CarouselStory';
import { Container } from '@mui/material';

const Home = () => {
  return (
    <>
      <Container maxWidth='xs' >
        <Header />
        <CarouselStory />
        <MediaCard />
        <Navbar />
      </Container>
    </>
  );
};

export default Home;
