import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../../apis/post';
import PostCard from './PostCard';

const MediaCard = () => {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    const fetchAllPost = async () => {
      try {
        const res = await getAllPosts();
        const result = res.data;
        
        setAllPost(result);
        console.log(result)
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
          <PostCard item={item} />
            {/* <Card sx={{ marginBottom: '5px' }} elevation={1}>
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
                  icon={Icon}
                  onClick={handleClickLiked}
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
                {item.PostLikes.length >= 1 ? (
                  <Box>
                    <Typography sx={{ fontWeight: '500' }}>
                      {item.PostLikes.length}{' '}
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
            </Card> */}
          </>
        );
      })}
    </>
  );
};

export default MediaCard;
