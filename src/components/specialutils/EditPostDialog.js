import React, { useContext, useState } from 'react';
import {
  Avatar,
  Box,
  CardMedia,
  TextField,
  Paper
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { updatePost } from '../../apis/post'; 
import { AuthContext } from '../../context/AuthContext';
import Carousel from 'react-material-ui-carousel';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='left' ref={ref} {...props} />;
});

const EditPostDialog = ({
  openEditPostDialog,
  handleClickEditPostDialog,
  items,
  fetchGetMePosts
}) => {

  const { user } = useContext(AuthContext);

  const [message, setMessage] = useState();

  const fetchUpdateUserPost = async () => {
    try {
      const res = await updatePost(
        items.id, 
        message
      );
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };


  const handleSubmitEditMessageForm = async e => {
    await fetchUpdateUserPost();
    handleClickEditPostDialog();
    await fetchGetMePosts();
  }

  return (
    <div>
      <Dialog
        fullScreen
        open={openEditPostDialog}
        onClose={handleClickEditPostDialog}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'sticky', zIndex: '1500' }} color='transparent'>
          <Box>
            <Paper
              sx={{
                position: 'sticky',
                top: 0,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'space-between',
                zIndex: 1100,
                height: '50px',
              }}
              elevation={0}
            >
              <Box
                sx={{
                  width: '80px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                component='div'
                role='button'
                onClick={handleClickEditPostDialog}
              >
                <Typography sx={{ fontSize: '18px' }}>Cancle</Typography>
              </Box>
              <Box
                sx={{
                  width: '80px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>
                  Edit info
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '80px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                component='div'
                role='button'
                onClick={handleSubmitEditMessageForm}
              >
                <Typography sx={{ fontSize: '18px' }}>Done</Typography>
              </Box>
            </Paper>
          </Box>
        </AppBar>
        <Box
          sx={{
            height: '80px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0 15px',
            gap: '10px',
          }}
        >
          <Box
            sx={{
              height: '60px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Avatar alt='' src={user.profileImg} sx={{ width: '50px', height: '50px' }} />
          </Box>
          <Box sx={{ height: '60px', width: '250px' }}>
            <Typography sx={{ fontWeight: '500', color: 'gray' }}>
              {user.username}
            </Typography>
            <Typography sx={{ color: 'gray' }}>Add location...</Typography>
          </Box>
        </Box>
        <Box>
          {items.PostMedia.length < 1 ? 
          
          <CardMedia component={items.PostMedia[0].type} src={items.PostMedia[0].media} alt='' height={400} />
          :
          <Carousel autoPlay={false} animation="slide" sx={{ color: '#be6efb86' }}>
            <CardMedia 
              component={items.PostMedia[0].type}
              image={items.PostMedia[0].media}
              alt=''
              height='400'
              width='350'
            />
          </Carousel>
        }
        </Box>
        <Box sx={{ textAlign: 'center' }}>
            <TextField
              placeholder='edit caption...'
              fullWidth
              value={message}
              ariant='outlined'
              onChange={e => setMessage(e.target.value)}
            />
        </Box>
      </Dialog>
    </div>
  );
};

export default EditPostDialog;
