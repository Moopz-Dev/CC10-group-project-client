import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-material-ui-carousel";

const CarouselStory = () => {
  return (
    <Carousel>
      <Box
        sx={{
          height: "10vh",
          padding: "40px 15px",
          display: "flex",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 55, height: 55 }} />
          <Typography>user1</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 55, height: 55 }} />
          <Typography>user2</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 55, height: 55 }} />
          <Typography>user3</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 55, height: 55 }} />
          <Typography>user4</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 55, height: 55 }} />
          <Typography>user5</Typography>
        </Box>
      </Box>
    </Carousel>
  );
};

export default CarouselStory;
