import React from 'react';
import {
  Avatar,
  Box,
  CardMedia,
  FormControl,
  Paper,
  TextField,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import test1 from '../../images/posts/test01.jpg';
import pro1 from '../../images/profiles/pro1.jpg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='left' ref={ref} {...props} />;
});

const EditPostDialog = ({ openEditPostDialog, handleClickEditPostDialog }) => {
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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                component='div'
                role='button'
                onClick={handleClickEditPostDialog}
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
            <Avatar alt='' src={pro1} sx={{ width: '50px', height: '50px' }} />
          </Box>
          <Box sx={{ height: '60px', width: '250px' }}>
            <Typography sx={{ fontWeight: '500', color: 'gray' }}>
              username
            </Typography>
            <Typography sx={{ color: 'gray' }}>Add location...</Typography>
          </Box>
        </Box>
        <Box>
          <CardMedia component='img' src={test1} alt='' height={400} />
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <FormControl sx={{ width: '390px' }}>
            <TextField
              placeholder='edit caption...'
              sx={{}}
              fullWidth
              ariant='outlined'
            />
          </FormControl>
        </Box>
      </Dialog>
    </div>
  );
};

export default EditPostDialog;
