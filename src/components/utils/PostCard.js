import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import { Box } from '@mui/system';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Typography from '@mui/material/Typography';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Avatar } from '@mui/material';
import CarouselPostPic from './CarouselPostPic';
import { Link } from 'react-router-dom';
import { timeSince } from '../../services/timeSince';
import { AuthContext } from '../../context/AuthContext';
import { likePost } from '../../apis/like';

const PostCard = ({ item }) => {
  const { user } = useContext(AuthContext);

  const isUserLikedObj = item.PostLikes.find((el) => el.userId === user.id);
  const chechUserLiked = typeof isUserLikedObj === 'object' ? true : false;

  const [liked, setLiked] = useState(chechUserLiked);;
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

  return (
    <>
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
            <BottomNavigationAction size='small' icon={<MoreHorizIcon />} />
          </Box>
        </Box>
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
          <Link to='/comment'>
            <BottomNavigationAction
              size='small'
              icon={<ModeCommentOutlinedIcon />}
            />
          </Link>
          <BottomNavigationAction size='small' icon={<SendOutlinedIcon />} />
        </CardActions>
        <CardContent sx={{ display: 'block' }}>
          {item.PostLikes.length + Number(liked) >= 1 ? (
            <Box>
              <Typography sx={{ fontWeight: '500' }}>
                {item.PostLikes.length + Number(liked)}{' '}
                {item.PostLikes.length >= 2 ? 'Likes' : 'Like'}
              </Typography>
            </Box>
          ) : null}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                {item.User.username}
              </Typography>
              &nbsp;&nbsp;
              <Typography>{item.message}</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: 'gray' }}>
                {timeSince(new Date(item.createdAt))}
              </Typography>
            </Box>
          </Box>
          {item.PostComments.length >= 1 ? (
            <Box>
              <Typography sx={{ color: 'gray', fontSize: '14px' }}>
                View all {item.PostComments.length}{' '}
                {item.PostComments.length >= 2 ? 'comments' : 'comment'}
              </Typography>
            </Box>
          ) : null}
        </CardContent>
      </Card>
    </>
  );
};

export default PostCard;
