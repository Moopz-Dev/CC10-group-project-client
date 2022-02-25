import { Avatar, Button, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import test01 from '../../images/posts/test01.jpg';
import { Divider } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const ActivityList = () => {
  return (
    <>
      <Box sx={{ height: '100vh' }}>
        <Box sx={{ padding: '25px 0 10px 10px', fontWeight: 'bold' }}>
          This week
        </Box>
        <List>
          <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Avatar />
              <Typography
                sx={{
                  marginLeft: '10px',
                  fontWeight: 'bold',
                }}
              >
                user1
              </Typography>
              <Typography sx={{ marginLeft: '10px' }}>
                liked your post
              </Typography>
              <Typography sx={{ marginLeft: '10px', color: 'gray' }}>
                {' '}
                2d
              </Typography>
            </Box>
            <Box>
              <img
                src={test01}
                width={40}
                height={30}
                style={{ marginLeft: '30px' }}
              />
            </Box>
          </ListItem>
          <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Avatar />
              <Typography
                sx={{
                  marginLeft: '10px',
                  fontWeight: 'bold',
                }}
              >
                user2
              </Typography>
              <Typography sx={{ marginLeft: '10px' }}>
                liked your post
              </Typography>
              <Typography sx={{ marginLeft: '10px', color: 'gray' }}>
                {' '}
                2d
              </Typography>
            </Box>
            <Box>
              <img
                src={test01}
                width={40}
                height={30}
                style={{ marginLeft: '30px' }}
              />
            </Box>
          </ListItem>
          <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Avatar />
              <Typography
                sx={{
                  marginLeft: '10px',
                  fontWeight: 'bold',
                }}
              >
                user3
              </Typography>
              <Typography sx={{ marginLeft: '10px' }}>
                liked your post
              </Typography>
              <Typography sx={{ marginLeft: '10px', color: 'gray' }}>
                {' '}
                2d
              </Typography>
            </Box>
            <Box>
              <img
                src={test01}
                width={40}
                height={30}
                style={{ marginLeft: '30px' }}
              />
            </Box>
          </ListItem>
          <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Avatar />
              <Typography
                sx={{
                  marginLeft: '10px',
                  fontWeight: 'bold',
                }}
              >
                user4
              </Typography>
              <Typography sx={{ marginLeft: '10px' }}>
                liked your post
              </Typography>
              <Typography sx={{ marginLeft: '10px', color: 'gray' }}>
                {' '}
                2d
              </Typography>
            </Box>
            <Box>
              <img
                src={test01}
                width={40}
                height={30}
                style={{ marginLeft: '30px' }}
              />
            </Box>
          </ListItem>
        </List>
        <Divider />
        <Box sx={{ padding: '25px 0 10px 10px', fontWeight: 'bold' }}>
          Suggested for you
        </Box>
        <List>
          <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Avatar />
              <Box sx={{ marginLeft: '10px' }}>
                <Typography sx={{ fontWeight: 'bold' }}>margi_za</Typography>
                <Typography sx={{ color: 'gray' }}>Margi Rasri</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Button sx={{ background: '#bd6efb', color: 'white' }}>
                Follow
              </Button>
              <ClearIcon sx={{ fontSize: '16px' }} />
            </Box>
          </ListItem>
          <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Avatar />
              <Box sx={{ marginLeft: '10px' }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  boyprakob_eiei
                </Typography>
                <Typography sx={{ color: 'gray' }}>Boy Prakob</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Button sx={{ background: '#bd6efb', color: 'white' }}>
                Follow
              </Button>
              <ClearIcon sx={{ fontSize: '16px' }} />
            </Box>
          </ListItem>
          <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Avatar />
              <Box sx={{ marginLeft: '10px' }}>
                <Typography sx={{ fontWeight: 'bold' }}>natthabamm</Typography>
                <Typography sx={{ color: 'gray' }}>bambam</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Button sx={{ background: '#bd6efb', color: 'white' }}>
                Follow
              </Button>
              <ClearIcon sx={{ fontSize: '16px' }} />
            </Box>
          </ListItem>
          <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Avatar />
              <Box sx={{ marginLeft: '10px' }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  i_am_gigi
                </Typography>
                <Typography sx={{ color: 'gray' }}>Gigi Hasus</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Button sx={{ background: '#bd6efb', color: 'white' }}>
                Follow
              </Button>
              <ClearIcon sx={{ fontSize: '16px' }} />
            </Box>
          </ListItem>
          <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Avatar />
              <Box sx={{ marginLeft: '10px' }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  callmeratana
                </Typography>
                <Typography sx={{ color: 'gray' }}>รัตนาไง จำไม่ได้หรอ</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Button sx={{ background: '#bd6efb', color: 'white' }}>
                Follow
              </Button>
              <ClearIcon sx={{ fontSize: '16px' }} />
            </Box>
          </ListItem>
        </List>
        <Box sx={{ padding: '0 0 10px 10px', fontWeight: 'bold', color: '#bd6efb', fontSize: '14px' }}>
          See more suggestions
        </Box>
      </Box>
    </>
  );
};

export default ActivityList;
