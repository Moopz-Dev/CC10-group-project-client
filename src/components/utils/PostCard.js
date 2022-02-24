import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import { Box } from '@mui/system';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Typography from '@mui/material/Typography';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Avatar } from '@mui/material';
import CarouselPostPic from './CarouselPostPic';
import { Link } from 'react-router-dom';
import { timeSince } from '../../services/timeSince';
import { AuthContext } from '../../context/AuthContext';
import { likePost } from '../../apis/like';
import MenuTooltip from '../specialutils/MenuTooltop';
import CommentDialog from '../comments/CommentDialog';

const PostCard = ({ item }) => {
  const { user } = useContext(AuthContext);

  const isUserLikedObj = item.PostLikes.find((el) => el.userId === user.id);
  const chechUserLiked = typeof isUserLikedObj === 'object' ? true : false;

  const [liked, setLiked] = useState(chechUserLiked);

  const Icon = liked ? (
    <FavoriteOutlinedIcon sx={{ color: 'red' }} />
  ) : (
    <FavoriteBorderIcon />
  );

  const handleLiked = () => {
    setLiked(!liked);
  };

  const handleClickLiked = () => {
    handleLiked();
    handleClickLike();
  };

  const handleClickLike = async () => {
    try {
      const res = await likePost(item.id);
    } catch (err) {
      console.log(err);
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [openComment, setOpenComment] = useState(false);

  const handleClickOpenComment = () => {
    setOpenComment(!openComment);
  };

  return (
    <>
      <CommentDialog
        openComment={openComment}
        handleClickOpenComment={handleClickOpenComment}
        items={item}
        user={user}
      />
      <Card sx={{ marginBottom: '5px' }} elevation={1}>
        <Box
          sx={{
            padding: '20px ',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={item.User.profileImg} />
            &nbsp;&nbsp;
            <Box>
              <Typography sx={{ fontWeight: 'bold' }}>
                {item.User.username}
              </Typography>
            </Box>
          </Box>
          <Box>
            <BottomNavigationAction
              size='small'
              icon={<MoreHorizIcon />}
              id='basic-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickMenu}
            />
          </Box>
        </Box>
        <MenuTooltip
          handleCloseMenu={handleCloseMenu}
          open={open}
          anchorEl={anchorEl}
        />
        {item.PostMedia.length >= 2 ? (
          <CarouselPostPic PostMedia={item.PostMedia} />
        ) : (
          <CardMedia
            component={item.PostMedia[0].type}
            height='400'
            width='350'
            image={item.PostMedia[0].media}
            alt=''
          />
        )}
        <CardActions sx={{ display: 'flex', width: '40%', height: '30px' }}>
          <BottomNavigationAction
            size='small'
            icon={Icon}
            onClick={handleClickLiked}
          />
          <BottomNavigationAction
            size='small'
            icon={<ModeCommentOutlinedIcon />}
            onClick={handleClickOpenComment}
          />
        </CardActions>
        <CardContent sx={{ display: 'block' }}>
          {item.PostLikes.length + Number(liked) >= 1 ? (
            <Box>
              <Typography sx={{ fontWeight: '500' }}>
                {item.PostLikes.length + Number(liked)}{' '}
                {item.PostLikes.length + Number(liked) >= 2 ? 'Likes' : 'Like'}
              </Typography>
            </Box>
          ) : null}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                  {item.User.username}
                </Typography>
                &nbsp;&nbsp;
                <Typography>{item.message}</Typography>
              </Box>
              {item.PostComments.length >= 1 ? (
                <Box
                  component='span'
                  role='button'
                  onClick={handleClickOpenComment}
                >
                  <Typography sx={{ color: 'gray', fontSize: '16px' }}>
                    View all {item.PostComments.length}{' '}
                    {item.PostComments.length >= 2 ? 'comments' : 'comment'}
                  </Typography>
                </Box>
              ) : null}
            </Box>
            <Box>
              <Typography sx={{ color: 'gray', fontSize: '14px' }}>
                {timeSince(new Date(item.createdAt))}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default PostCard;
