import React from "react";
import { Container } from "@mui/material";
import CreateReels from "../../components/utils/CreateReels";
import Header from "../../components/utils/Header";
import Navbar from "../../components/utils/Navbar";

function PostReels() {
  return (
    <>
      <Header />
      <CreateReels />
      <Navbar />
    </>
  );
}

export default PostReels;
