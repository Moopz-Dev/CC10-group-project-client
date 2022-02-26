import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PostAddIcon from '@mui/icons-material/PostAdd';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import CreatePostDialog from './CreatePostDialog';
import CreatReelDialog from '../reelsCom/CreatReelDialog';
import CreateStoryDialog from '../stories/CreateStoryDialog';
import IconButton from '@mui/material/IconButton';

const Header = () => {
  const [state, setState] = useState({
    bottom: false,
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [openReelDialog, setOpenReelDialog] = useState(false);
  const [openStoryDialog, setOpenStoryDialog] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClickDialog = (text) => {
    console.log(text);
    if (text === 'Post') {
      handleCreatePostDialog();
    } else if (text === 'Reels') {
      handleCreateReelDialog();
      // navigate('/postreels');
    } else if (text === 'Story') {
      handleCreateStoryDialog();
    }
  };

  const handleCreatePostDialog = () => {
    setOpenDialog(!openDialog);
  };
  const handleCreateReelDialog = () => {
    setOpenReelDialog(!openReelDialog);
  };
  const handleCreateStoryDialog = () => {
    setOpenStoryDialog(!openStoryDialog);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        component='div'
        sx={{
          textAlign: 'center',
          padding: '15px 0 10px 0',
          fontSize: '1.2rem',
          fontWeight: '500',
        }}
      >
        Create
      </Box>
      <List>
        {['Post', 'Reels', 'Story'].map((text, index) => (
          <ListItem button key={text} onClick={() => handleClickDialog(text)}>
            <ListItemIcon on>
              {index === 0 && <GridOnOutlinedIcon />}
              {index === 1 && <InboxIcon />}
              {index === 2 && <MusicVideoIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <CreatePostDialog
        handleCreatePostDialog={handleCreatePostDialog}
        openDialog={openDialog}
      />
      <CreatReelDialog
        handleCreateReelDialog={handleCreateReelDialog}
        openReelDialog={openReelDialog}
      />
      <CreateStoryDialog
        handleCreateStoryDialog={handleCreateStoryDialog}
        openStoryDialog={openStoryDialog}
      />
      <Box>
        <Paper
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 1100,
          }}
          elevation={0}
        >
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <Box
              sx={{
                margin: '10px 0 0 15px',
                alignSelf: 'center',
                fontFamily: 'cookie',
                fontSize: '2rem',
              }}
            >
              Instagrum
            </Box>
          </Link>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '15px',
            }}
          >
            {['bottom'].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton onClick={toggleDrawer(anchor, true)}>
                  <PostAddIcon />
                  {/* {anchor} */}
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
            <Link to='/activities'>
              <IconButton>
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            </Link>
            <Link to='/mesenger'>
              <IconButton>
                <ChatOutlinedIcon />
              </IconButton>
            </Link>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Header;
