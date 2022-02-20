import React from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

const PrivateAccount = () => {
  return (
    <>
      <Box
        sx={{
          height: 550,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <HttpsOutlinedIcon />
          <Typography variant='heading'>This Account is Private</Typography>
          <Typography>
            Follow this account to see thieir photos and videos.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default PrivateAccount;
