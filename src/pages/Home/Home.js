import React, { useEffect, useContext } from "react";
import Header from "../../components/utils/Header";
import { Navbar } from "../../components/utils/Navbar";
import MediaCard from "../../components/utils/MediaCard";
import SliderStory from "../../components/utils/SliderStory";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Container 
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',padding: 0 }}>
        <Header />
        <SliderStory />
        <MediaCard />
        <Navbar />
      </Container>
    </>
  );
};

export default Home;
