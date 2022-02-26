import React from 'react'
import { CardMedia } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const CarouselUserOwnPost = ({ PostMedia }) => {
    
  return (
    <Carousel autoPlay={false} animation="slide" sx={{ color: '#be6efb86' }}>
      {PostMedia.map((item, i) => (
          <CardMedia
            component={item.type}
            image={item.media}
            alt=''
            height='400'
            width='350'
          />
      ))}
    </Carousel>
  )
}

export default CarouselUserOwnPost