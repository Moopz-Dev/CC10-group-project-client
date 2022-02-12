import React from "react";
import Header from "../../components/utils/Header";
import { Navbar } from "../../components/utils/Navbar";
import MediaCard from "../../components/utils/MediaCard";
import CarouselStory from "../../components/utils/CarouselStory";

const Home = () => {
  return (
    <>
      <box>
        <Header />
        <CarouselStory />
        <MediaCard />
        <Navbar />
      </box>
    </>
  );
};

export default Home;
