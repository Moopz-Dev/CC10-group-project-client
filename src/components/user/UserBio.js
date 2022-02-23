import React, { useEffect, useState } from 'react';
import { Avatar, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import user2 from '../../images/profiles/pro2.jpg';
import StandardImageList from './StandardImageList';
import SettingsIcon from '@mui/icons-material/Settings';
import UserOwnerSlideDialog from './UserOwnerSlideDialog';

const UserBio = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Box sx={{ height: '100px', display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar
            src={user2}
            sx={{ width: 70, height: 70, marginLeft: '20px' }}
          />
        </Box>
        <Box
          sx={{
            height: '100px',
            width: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography>6</Typography>
            <Typography>Posts</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography>0</Typography>
            <Typography>Followers</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography>0</Typography>
            <Typography>Following</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: '100px' }}>
        <Box sx={{ height: '60px', padding: '0 15px' }}>
          <Typography variant='body'>username</Typography>
          <Typography>I am a good man in the world.</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            variant='outlined'
            sx={{
              width: '300px',
              color: '#bd6efb',
              border: '2px solid #bd6efb',
            }}
            onClick={handleClickOpenDialog}
          >
            Edit Profile
          </Button>
          <UserOwnerSlideDialog open={open} handleCloseDialog={handleCloseDialog} />
          <SettingsIcon
            sx={{
              border: '2px solid #bd6efb',
              padding: '5px',
              borderRadius: '3px',
              color: '#bd6efb',
            }}
          />
        </Box>
      </Box>

      <StandardImageList />
    </Box>
  );
};

export default UserBio;
