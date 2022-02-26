import React, { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { AuthContext } from '../../../context/AuthContext';
import { Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CarouselUserOwnPost from './CarouselUserOwnPost';
import { timeSince } from '../../../services/timeSince';
import CommentDialog from '../../comments/CommentDialog';
import MenuTooltip from '../../specialutils/MenuTooltop';
import { likePost } from '../../../apis/like';

const PostCards = ({ items }) => {
  const { user } = useContext(AuthContext);

  const isUserLikedObj = items.PostLikes.find((el) => el.userId === user.id);
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
      const res = await likePost(items.id);
    } catch (err) {
      console.log(err);
    }
  };
//   console.log(items);
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
        items={items}
        user={user}
      />
      <Card sx={{ width: '390px' }}>
        <CardHeader
          avatar={<Avatar src={items.User.profileImg} />}
          action={
            <IconButton
              size='small'
              id='basic-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickMenu}
            >
              <MoreHorizIcon />
            </IconButton>
          }
          title={
            <Typography sx={{ fontWeight: '500' }}>
              {items.User.username}
            </Typography>
          }
        />
        <MenuTooltip
            handleCloseMenu={handleCloseMenu}
            open={open}
            anchorEl={anchorEl}
            items={items}
        />
        {items.PostMedia.length >= 2 ? (
          <CarouselUserOwnPost PostMedia={items.PostMedia} />
        ) : (
          <CardMedia
            component={items.PostMedia[0].type}
            height='350'
            image={items.PostMedia[0].media}
            alt='Paella dish'
          />
        )}
        <CardActions sx={{ height: '20px' }}>
          <IconButton onClick={handleClickLiked}>
            {Icon}
          </IconButton>
          <IconButton onClick={handleClickOpenComment}>
            <ChatBubbleOutlineIcon sx={{ fontSize: '25' }} />
          </IconButton>
        </CardActions>
        <CardContent>
          {items.PostLikes.length + Number(liked) >= 1 ? (
            <Box>
              <Typography sx={{ fontWeight: '500' }}>
                {items.PostLikes.length + Number(liked)}{' '}
                {items.PostLikes.length + Number(liked) >= 2 ? 'Likes' : 'Like'}
              </Typography>
            </Box>
          ) : null}
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ fontWeight: '500' }}>
              {items.User.username}
            </Typography>
            &nbsp; &nbsp;
            <Typography>{items.message}</Typography>
          </Box>
          {items.PostComments.length >= 1 ? (
            <Box
              component='span'
              role='button'
              onClick={handleClickOpenComment}
            >
              <Typography sx={{ color: 'gray', fontSize: '16px' }}>
                View all {items.PostComments.length}{' '}
                {items.PostComments.length >= 2 ? 'comments' : 'comment'}
              </Typography>
            </Box>
          ) : null}
          <Box>
            <Typography sx={{ color: 'gray', fontSize: '14px' }}>
              {timeSince(new Date(items.createdAt))}
            </Typography>{' '}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default PostCards;
