import React from "react";
import { CardMedia } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const CarouselPreviewPic = ({ medias }) => {
  console.log(medias)
  return (
    <Carousel autoPlay={false} animation="slide" sx={{ color: '#be6efb86' }}>
      {medias.map((item, i) => (
          <CardMedia
            component={item.type.split('/')[0] === 'video' ? 'video' : 'img' }
            image={URL.createObjectURL(item)}
            alt=''
            height='300'
            width='350'
            sx={{ borderRadius: '5px' }}
          />
      ))}
    </Carousel>
  );
};

export default CarouselPreviewPic;