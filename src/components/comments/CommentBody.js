import React from 'react';
import { Avatar, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import user1 from '../../images/profiles/pro1.jpg';
import user2 from '../../images/profiles/pro2.jpg';
import user3 from '../../images/profiles/pro3.jpg';

const CommentBody = () => {
  return (
    <Box>
      {/* Caption select from post */}
      <Box
        sx={{
          padding: '20px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid lightgray',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={user1} /> &nbsp;
          <Typography sx={{ fontWeight: '500' }}>username1</Typography> &nbsp;
          <Typography>Girl girl gril</Typography>
        </Box>
        <Box>
          <Box>
            <Typography>2h</Typography>
          </Box>
        </Box>
      </Box>
      {/* Comment mock up */}
      <Box
        sx={{
          padding: '20px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={user2} /> &nbsp;
          <Typography sx={{ fontWeight: '500' }}>username2</Typography> &nbsp;
          <Typography>So cute!</Typography>
        </Box>
        <Box>
          <Box>
            <Typography>2h</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          padding: '20px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={user3} /> &nbsp;
          <Typography sx={{ fontWeight: '500' }}>username3</Typography> &nbsp;
          <Typography>Super cute</Typography>
        </Box>
        <Box>
          <Box>
            <Typography>2h</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          display: 'flex',
          alignItems: 'center',
          padding: '20px 10px',
        }}
      >
        <Avatar src={user1} /> &nbsp;
        <TextField id='outlined-basic' variant='outlined' fullWidth />
      </Box>
    </Box>
  );
};

export default CommentBody;
