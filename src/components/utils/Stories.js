import { Box, Button, Container, FormControl, TextField } from '@mui/material';
import React from 'react';
import ReactInstaStories from 'react-insta-stories';
import CloseIcon from '@mui/icons-material/Close';
import { useFormControl } from '@mui/material/FormControl';
import { display } from '@mui/system';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';

const Stories = () => {
  const navigate = useNavigate();

  return (
    // <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center' }}>
    // <Carousel>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        maxWidth='sm'
      >
        <Box
          sx={{
            width: '100%',
            height: '40px',
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            zIndex: 1100,
            top: '10px',
          }}
        >
          <Button onClick={(e) => navigate('/')}>
            <CloseIcon sx={{ color: 'white', fontSize: '30px' }} />
          </Button>
        </Box>
        <ReactInstaStories
          stories={stories}
          defaultInterval={1500}
          width='100vw'
          height='100vh'
        />
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1100,
            // outline: '2px dashed red',
            width: '100%',
            bottom: '10px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <FormControl>
            <TextField
              size='small'
              sx={{
                border: '1px solid white',
                textColor: 'white',
                borderRadius: '50px',
                width: '250px',
              }}
              placeholder='Send Message'
              // color='inherite'
            />
          </FormControl>
          <span
            role='button'
            style={{ transform: 'rotate(-45deg)', marginLeft: '20px' }}
          >
            <SendIcon sx={{ color: 'white', fontSize: '30px' }} />
          </span>
          <Button>
            <FavoriteBorderIcon sx={{ color: 'white', fontSize: '30px' }} />
          </Button>
        </Box>
        <Box></Box>
      </Box>
    // {/* </Carousel> */}
    // {/* // </Container> */}
  );
};
export default Stories;

const stories = [
  {
    url: 'https://picsum.photos/1080/1920',
    // seeMore: <SeeMore />,
    header: {
      heading: 'Mohit Karekar',
      subheading: 'Posted 5h ago',
      profileImage: 'https://picsum.photos/1000/1000',
    },
  },
  {
    url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
    header: {
      heading: 'Mohit Karekar',
      subheading: 'Posted 32m ago',
      profileImage: 'https://picsum.photos/1080/1920',
    },
  },
  {
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    header: {
      heading: 'mohitk05/react-insta-stories',
      subheading: 'Posted 32m ago',
      profileImage:
        'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4',
    },
    type: 'video',
  },
];
