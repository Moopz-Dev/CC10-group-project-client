import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import StandardImageList from './StandardImageList';
import SettingsIcon from '@mui/icons-material/Settings';
import UserOwnerSlideDialog from './UserOwnerSlideDialog';
import { AuthContext } from '../../../context/AuthContext';
import { UserDataContext } from '../../../context/UserDataContext';

const UserBio = () => {
  const [open, setOpen] = useState(false);

  const { user } = useContext(AuthContext);
  const { followerCount, followingCount, userPosts } =
    useContext(UserDataContext);

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
      <Box>
        <Box
          sx={{
            height: '100px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
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
              src={user.profileImg}
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
              <Typography sx={{ fontWeight: '500' }}>
                {userPosts[0].PostMedia.length}
              </Typography>
              <Typography>
                {userPosts[0].PostMedia.length > 1 ? 'Posts' : 'Post'}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontWeight: '500' }}>
                {followerCount.followersCount}
              </Typography>
              <Typography>
                {followerCount.followersCount > 1 ? 'Followers' : 'Follower'}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontWeight: '500' }}>
                {followingCount.followingCount}
              </Typography>
              <Typography>Following</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ height: '100px' }}>
          <Box
            sx={{ height: '60px', padding: '0 15px', paddingBottom: '10px' }}
          >
            <Typography sx={{ fontWeight: '500' }}>{user.name}</Typography>
            <Typography>{user.bio}</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3px',
            }}
          >
            <Button
              variant='outlined'
              sx={{
                width: '320px',
                color: '#bd6efb',
                border: '1px solid #bd6efb',
              }}
              onClick={handleClickOpenDialog}
            >
              Edit Profile
            </Button>
            <UserOwnerSlideDialog
              open={open}
              handleCloseDialog={handleCloseDialog}
            />
            <SettingsIcon
              sx={{
                border: '1px solid #bd6efb',
                bgcolor: '#bd6efb',
                padding: '5px',
                borderRadius: '3px',
                color: 'white',
              }}
              onClick={handleClickOpenDialog}
            />
          </Box>
        </Box>
      </Box>

      <StandardImageList userPosts={userPosts} />
    </Box>
  );
};

export default UserBio;
