import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper, Typography } from '@mui/material';
import AddBoxOutlined from '@mui/icons-material/AddBoxOutlined';
import DehazeIcon from '@mui/icons-material/Dehaze';

const UserHeader = () => {
  return (
    <>
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
              fontSize: '1.2rem'
            }}
          >
            username1
          </Typography>
          <Box sx={{ width: 150, display: 'flex' }}>
            <BottomNavigationAction icon={<AddBoxOutlined />} />
            <BottomNavigationAction icon={<DehazeIcon />} />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default UserHeader;
