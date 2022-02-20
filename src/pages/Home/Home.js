import React, { useEffect } from "react";
import Header from "../../components/utils/Header";
import { Navbar } from "../../components/utils/Navbar";
import MediaCard from "../../components/utils/MediaCard";
import SliderStory from "../../components/utils/SliderStory";
import { Container } from "@mui/material";
import { getUserPosts } from "../../apis/post";

const Home = () => {
  useEffect(() => {
    getUserPosts();
  });
  return (
    <>
      <Container maxWidth="xs">
        <Header />
        <SliderStory />
        <MediaCard />
        <Navbar />
      </Container>
    </>
  );
};

export default Home;
