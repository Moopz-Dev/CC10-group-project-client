import React from "react";
import { CardMedia } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const CarouselPostPic = () => {
  const items = [
    {
      url: "https://picsum.photos/id/237/200/300",
    },
    {
      url: "https://picsum.photos/id/238/200/300",
    },
  ];
  return (
    <Carousel>
      {items.map((item, i) => (
          <CardMedia
            component='img'
            image={item.url}
            alt={item.url}
            height='400'
            width='350'
          />
      ))}
    </Carousel>
  );
};

export default CarouselPostPic;
