import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const ActivityHeader = () => {
  const navigate = useNavigate();

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
            alignItems: 'center',
            zIndex: 1100
          }}
          elevation={0}
        >
          <Box
            style={{
              width: '10px',
            }}
          >
            <BottomNavigationAction
              icon={<ArrowBackIosNewIcon />}
              onClick={(e) => navigate('/')}
            />
          </Box>
          <Box>
              <Typography sx={{ fontSize: '18px', fontWeight: '500' }}>Activity</Typography>
          </Box>
          <Box></Box>
        </Paper>
      </Box>
    </>
  );
};

export default ActivityHeader;
