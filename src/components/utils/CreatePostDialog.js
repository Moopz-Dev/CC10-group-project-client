import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box, Container, Divider } from '@mui/material';
import '../../styles/utils/createPostDialog.css';
import axios from '../../config/axios';
import CarouselPreviewPic from './CarouselPreviewPic';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ClearIcon from '@mui/icons-material/Clear';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const CreatePostDialog = ({ handleCreatePostDialog, openDialog }) => {
  const [media, setMedia] = useState([]);
  const [message, setMessage] = useState('');

  const fileUpload = (e) => {
    const files = e.target.files;
    if (files) {
      setMedia([...e.target.files]);
      // setUpload(e.target.files);
    }
  };
  const uploadPost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('message', message);
    for (let i = 0; i < media.length; i++) {
      formData.append('media', media[i]);
    }
    console.log(formData);
    axios.post('/posts/', formData).then((res) => {
      console.log(res);
      handleCreatePostDialog();
    });
  };

  const handleClearMedia = () => {
    setMedia([]);
  };

  return (
    <>
      <Container maxWidth='sm'>
        <Button variant='outlined' onClick={handleCreatePostDialog}></Button>
        <Dialog
          fullScreen
          maxWidth='sm'
          open={openDialog}
          onClose={handleCreatePostDialog}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }} color='transparent'>
            <Toolbar>
              <IconButton
                edge='start'
                color='inherit'
                onClick={handleCreatePostDialog}
                aria-label='close'
              >
                <CloseIcon />
              </IconButton>
              <Typography
                sx={{
                  ml: 2,
                  flex: 1,
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
                variant='h6'
                component='div'
              >
                New post
              </Typography>
              <Button autoFocus color='inherit' onClick={uploadPost}>
                share
              </Button>
            </Toolbar>
          </AppBar>
          <Box
            sx={{
              height: '400px',
              display: 'flex',
              flexDirection: 'column-reverse',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {media.length === 0 ? (
              <Box sx={{ width: '300px', bgcolor: 'red', display: 'none' }}>
                {media.length >= 2 ? (
                  <CarouselPreviewPic medias={media} />
                ) : (
                  <CarouselPreviewPic medias={media} />
                )}
              </Box>
            ) : (
              <Box sx={{ width: '300px' }}>
                {media.length >= 2 ? (
                  <CarouselPreviewPic medias={media} />
                ) : (
                  <CarouselPreviewPic medias={media} />
                )}
              </Box>
            )}
            <Box>
              {/*Select Button*/}
              {media.length === 0 ? (
                <label
                  role='button'
                  style={{
                    fontSize: '20px',
                    fontFamily: 'roboto',
                    color: '#a9aaab'
                  }}
                >
                  <Box
                    sx={{
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <InsertPhotoIcon
                      sx={{
                        fontSize: '60px',
                        transform: 'rotate(-10deg)',
                        color: '#a9aaab',
                        marginLeft: '20px',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        right: '140px',
                        top: '225px',
                        zIndex: 1100,
                      }}
                    >
                      <OndemandVideoIcon
                        sx={{
                          fontSize: '60px',
                          transform: 'rotate(10deg)',
                          color: '#a9aaab',
                        }}
                      />
                    </Box>
                    <br />
                  </Box>
                  Select Picture/Video{' '}
                  <input
                    type='file'
                    multiple
                    hidden
                    accept='image/*,video/mp4'
                    onChange={fileUpload}
                  />
                </label>
              ) : (
                <button
                  style={{
                    position: 'absolute',
                    zIndex: 1100,
                    right: '35px',
                    top: '85px',
                    background: 'white',
                    borderRadius: '100px',
                    padding: 0,
                    height: '30px',
                    width: '30px',
                    border: '1px solid gray',
                  }}
                  onClick={handleClearMedia}
                >
                  <ClearIcon sx={{ fontSize: '18px' }} />
                </button>
              )}
            </Box>
          </Box>
          {/* input message */}
          <Divider />
          <Box
            sx={{
              width: '100%',
              height: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>
              <input
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Write a caption...'
                style={{ border: 'none', fontSize: '18px' }}
              />
            </div>
          </Box>
          <Divider />
        </Dialog>
      </Container>
    </>
  );
};

export default CreatePostDialog;
