import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { Box } from '@mui/system';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import CarouselPostPic from './CarouselPostPic';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../apis/post';
import { timeSince } from '../../services/timeSince';

const MediaCard = () => {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    const fetchAllPost = async () => {
      try {
        const res = await getAllPosts();
        const result = res.data;
        // console.log(result);
        setAllPost(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPost();
  }, []);

  return (
    <>
      {allPost.map((item) => {
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
                  <BottomNavigationAction
                    size='small'
                    icon={<MoreHorizIcon />}
                  />
                </Box>
              </Box>
              {item.PostMedia.length >= 2 ? (
                <CarouselPostPic PostMedia={item.PostMedia} />
              ) : (
                <CardMedia
                  component={item.PostMedia.type}
                  height='400'
                  width='350'
                  image={item.PostMedia.type}
                  alt=''
                />
              )}
              <CardActions
                sx={{ display: 'flex', width: '40%', height: '30px' }}
              >
                <BottomNavigationAction
                  size='small'
                  icon={
                    // <FavoriteBorderIcon  />
                    <FavoriteOutlinedIcon sx={{ color: 'red' }} />
                  }
                />
                <Link to='/comment'>
                  <BottomNavigationAction
                    size='small'
                    icon={<ModeCommentOutlinedIcon />}
                  />
                </Link>
                <BottomNavigationAction
                  size='small'
                  icon={<SendOutlinedIcon />}
                />
              </CardActions>
              <CardContent sx={{ display: 'block' }}>
                {/* {item.PostLikes.length >= 1 ?  */}
                <Box>
                  <Typography sx={{ fontWeight: '500' }}>1 Liked</Typography>
                </Box>
                {/* : null */}
                {/* } */}
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
                <Box>
                  <Typography sx={{ color: 'gray', fontSize: '14px' }}>
                    View all 3 comments
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default MediaCard;
