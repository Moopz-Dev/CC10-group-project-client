import React from 'react';
import { Avatar, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import user3 from '../../../images/profiles/pro3.jpg';
import '../../../styles/userUnkown/userUnknown.css';

const UserUnknownBio = () => {
  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Box
          sx={{ height: '100px', display: 'flex', justifyContent: 'center' }}
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
              src={user3}
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
          <Box sx={{ height: '60px' }}>
            <Typography variant='body'>username</Typography>
            <Typography>Follow me please!</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ marginRight: '15px' }}>
                {/* Public Account */}
              {/* <button className='btn-follow'>Follow</button> */}
              {/* Private Account */}
              <button className='btn-follow-private'>Follow</button>
              {/* Following  */}
              {/* <button className='btn-follow'>Following</button> */}
            </Box>
            <Box>
              {/* <button className='btn-message'>Message</button> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserUnknownBio;
