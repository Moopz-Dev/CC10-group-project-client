import React from 'react';
import { Box } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Slide from '@mui/material/Slide';
import { Button, CardHeader } from '@mui/material';
import { Avatar } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextField from '@mui/material/TextField';
import shortTimeSince from '../../services/shortTimeSince';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='left' ref={ref} {...props} />;
});

const CommentDialog = ({
  openComment,
  handleClickOpenComment,
  items,
  user,
}) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={openComment}
        onClose={handleClickOpenComment}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }} color='transparent'>
          <Toolbar>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '400px',
              }}
            >
              <Box>
                <IconButton
                  edge='start'
                  color='inherit'
                  onClick={handleClickOpenComment}
                  aria-label='close'
                >
                  <ArrowBackIosIcon />
                </IconButton>
              </Box>
              <Box>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant='h6'
                  component='div'
                >
                  Comment
                </Typography>
              </Box>
              <Box component='div' sx={{ width: '40px' }}></Box>
            </Box>
          </Toolbar>
        </AppBar>
        <List>
          <CardHeader
            avatar={<Avatar src={items.User.profileImg} />}
            title={
              <typography>
                <span style={{ fontWeight: 'bold' }}>
                  {items.User.username}
                </span>
                &nbsp; &nbsp;
                {items.message}
              </typography>
            }
            subheader={shortTimeSince(new Date(items.createdAt))}
            sx={{ display: 'flex', alignItems: 'flex-start' }}
          />
          <Divider />
          {/* comment from friend */}
          {items.PostComments.map((el) => {
            return (
              <CardHeader
                avatar={<Avatar src={el.User.profileImg} />}
                title={
                  <typography>
                    <span style={{ fontWeight: 'bold' }}>
                      {el.User.username}
                    </span>
                    &nbsp; &nbsp; {el.message}
                  </typography>
                }
                subheader={shortTimeSince(new Date(el.createdAt))}
                sx={{ display: 'flex', alignItems: 'flex-start' }}
                action={
                  <Button sx={{ color: 'black' }}>
                    {/* <FavoriteBorderIcon sx={{ fontSize: '16px' }} /> */}
                    <FavoriteIcon sx={{ fontSize: '16px', color: 'red' }} />
                  </Button>
                }
              />
            );
          })}
        </List>
        {/* form comment */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '390px',
            height: '70px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box component='form' sx={{ display: 'flex', gap: '10px' }}>
            <Avatar src={user.profileImg} />
            <TextField
              placeholder='add acomment as username1'
              size='small'
              sx={{ width: '300px' }}
            />
            <Button sx={{ position: 'absolute', right: '20px' }}>Post</Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default CommentDialog;
