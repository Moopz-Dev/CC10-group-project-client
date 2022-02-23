import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box, Container } from '@mui/material';
import '../../styles/utils/createPostDialog.css';
// import { FiImage } from 'react-icons/fi';
import axios from '../../config/axios';

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
    console.log(media);
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

  return (
    <>
      <Container maxWidth='sm'>
        <Button variant='outlined' onClick={handleCreatePostDialog}>
          {/* Open full-screen dialog */}
        </Button>
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
              outline: '2px dashed red',
              height: '350px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* for  P' Moo */}

            {/* Preview Zone */}
            <ul style={{ display: 'flex' }}>
              {media.length > 0 &&
                media.map((item) =>
                  item.type.split('/')[0] === 'video' ? (
                    <video
                      src={URL.createObjectURL(item)}
                      width={200}
                      height={250}
                    ></video>
                  ) : (
                    <img
                      src={URL.createObjectURL(item)}
                      alt=''
                      width={200}
                      height={250}
                    />
                  )
                )}
            </ul>
            {/*Select Button*/}
            <div>
              <label role='button'>
                Select Picture/Video{' '}
                <input
                  type='file'
                  multiple
                  hidden
                  accept='image/*,video/mp4'
                  onChange={fileUpload}
                />
              </label>
            </div>
          </Box>
          {/* input message */}
          <Box
            sx={{
              outline: '2px dashed red',
              width: '100%',
              height: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>
              {/* <label>Description</label>{' '} */}
              <input
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Write a caption...'
                style={{ border: 'none', fontSize: '15px' }}
              />
            </div>
          </Box>
          {/* Submit button */}
          {/* <button >Upload Story</button> */}
        </Dialog>
      </Container>
    </>
  );
};

export default CreatePostDialog;
