import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import MultiNavUserProfile from './MultiNavUserProfile';


const StandardImageList = ({ userPosts }) => {
  // console.log(userPosts[0].PostMedia)
  // console.log(userPosts)

  const { PostMedia } = userPosts[0]
  console.log(PostMedia)

  return (
    <>
    <MultiNavUserProfile />
      <ImageList sx={{ width: 410, minHeight: '100%' }} cols={3} rowHeight={150} gap={1}>
        {PostMedia.map((item) => (
          <ImageListItem key={item.media}>
            <img
              src={`${item.media}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.media}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.id}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};
export default StandardImageList;
