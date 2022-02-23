import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper, Typography } from '@mui/material';
import AddBoxOutlined from '@mui/icons-material/AddBoxOutlined';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import CreatePostDialog from '../utils/CreatePostDialog';
import CreatReelDialog from '../reelsCom/CreatReelDialog';
import CreateStoryDialog from '../stories/CreateStoryDialog';

const UserHeader = () => {
  const [state1, setState1] = useState({
    bottom: false,
  });
  const [state2, setState2] = useState({
    bottom: false,
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [openReelDialog, setOpenReelDialog] = useState(false);
  const [openStoryDialog, setOpenStoryDialog] = useState(false);

  const toggleDrawer1 = (anchor1, open1) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState1({ ...state1, [anchor1]: open1 });
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

  const list1 = (anchor1) => (
    <Box
      sx={{ width: anchor1 === 'top' || anchor1 === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer1(anchor1, false)}
      onKeyDown={toggleDrawer1(anchor1, false)}
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
      <Divider />
      <List>
        {['Post', 'Reels', 'Story', 'Story Highlight'].map((text, index) => (
          <ListItem button key={text} onClick={() => handleClickDialog(text)}>
            <ListItemIcon>
              {index === 0 && <GridOnOutlinedIcon />}
              {index === 1 && <InboxIcon />}
              {index === 2 && <MusicVideoIcon />}
              {index === 3 && <StarOutlineIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const toggleDrawer2 = (anchor2, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState2({ ...state2, [anchor2]: open });
  };

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClickLogout = (text) => {
    console.log(text);
    if (text === 'Log out') {
      logout()
      navigate('/login')
    }
  }

  const list2 = (anchor2) => (
    <Box
      sx={{ width: anchor2 === 'top' || anchor2 === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer2(anchor2, false)}
      onKeyDown={toggleDrawer2(anchor2, false)}
    >
      <List>
        {['Setting', 'Log out'].map((text, index) => (
          <ListItem button key={text} onClick={() => handleClickLogout(text)}>
            <ListItemIcon>
              {index === 0 && <Settings />}
              {index === 1 && <Logout />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const handleClickDialog = (text) => {
    console.log(text);
    if (text === 'Post') {
      handleCreatePostDialog();
    } else if (text === 'Reels') {
      handleCreateReelDialog();
    } else if (text === 'Story') {
      handleCreateStoryDialog();
    }
  };

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
      <Box sx={{ pb: 7 }}>
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
          <Typography
            sx={{
              marginLeft: '15px',
              alignSelf: 'center',
              fontWeight: 600,
              fontSize: '1.2rem',
            }}
          >
            username1
          </Typography>
          {/* Drawer for create */}
          <Box sx={{ width: 150, display: 'flex' }}>
            {['bottom'].map((anchor1) => (
              <React.Fragment key={anchor1}>
                <BottomNavigationAction
                  icon={<AddBoxOutlined />}
                  onClick={toggleDrawer1(anchor1, true)}
                >
                  {anchor1}
                </BottomNavigationAction>
                <Drawer
                  anchor={anchor1}
                  open={state1[anchor1]}
                  onClose={toggleDrawer1(anchor1, false)}
                >
                  {list1(anchor1)}
                </Drawer>
              </React.Fragment>
            ))}
            {/* Drawer for log out */}
            {['bottom'].map((anchor2) => (
              <React.Fragment key={anchor2}>
                <BottomNavigationAction
                  icon={<DehazeIcon />}
                  onClick={toggleDrawer2(anchor2, true)}
                >
                  {anchor2}
                </BottomNavigationAction>
                <Drawer
                  anchor={anchor2}
                  open={state2[anchor2]}
                  onClose={toggleDrawer2(anchor2, false)}
                >
                  {list2(anchor2)}
                </Drawer>
              </React.Fragment>
            ))}
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default UserHeader;
