import React, { useContext } from 'react';
import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { AuthContext } from '../../../context/AuthContext';
import PostUserCard from './PostUserCard';
import Navbar from '../../utils/Navbar';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='left' ref={ref} {...props} />;
});

const PostsUserOwnerDialog = ({
  openPostUserDialog,
  handleClickOpenPostUserDialog,
}) => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Dialog
        fullScreen
        open={openPostUserDialog}
        onClose={handleClickOpenPostUserDialog}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'sticky', zIndex: '1500' }} color='transparent'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClickOpenPostUserDialog}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <Box>
              <Typography sx={{ fontSize: '14px', color: 'gray', textAlign: 'center' }}>
                {user.username}
              </Typography>
              <Typography sx={{ fontWeight: 'bold' }} component='div'>
                Posts
              </Typography>
            </Box>
            <Box sx={{ width: '40px' }}></Box>
          </Toolbar>
        </AppBar>
        {/* <Box sx={{ display: 'flex', justifyContent: 'center', outline: '2px dashed red' }}> */}
        <Box sx={{ overflowY: 'scroll' }}>
          <PostUserCard />
        </Box>
        <Navbar />
        {/* </Box> */}
      </Dialog>
    </div>
  );
};

export default PostsUserOwnerDialog;
