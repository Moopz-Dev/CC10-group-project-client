import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import MultiNavUserProfile from './MultiNavUserProfile';
import PostsUserOwnerDialog from './PostsUserOwnerDialog';
import { Card } from '@mui/material';

const StandardImageList = ({ userPosts }) => {
  const [openPostUserDialog, setOpenPostUserDialog] = useState(false);

  const handleClickOpenPostUserDialog = () => {
    setOpenPostUserDialog(!openPostUserDialog);
  };

  console.log(userPosts);

  return (
    <>
      <MultiNavUserProfile />
      <Card sx={{ marginBottom: '29px', height: '100vh' }}>
        <ImageList
          sx={{
            width: 390,
            Height: '100%',
            margin: 0,
            overflow: 'visible',
          }}
          cols={3}
          rowHeight={160}
          gap={1}
        >
          {userPosts.map((item) => (
            <ImageListItem key={item.PostMedia[0].media}>
              {item.PostMedia[0].type === 'img' ? (
                <img
                  src={`${item.PostMedia[0].media}?w=140&h=140&fit=crop&auto=format`}
                  srcSet={`${item.PostMedia[0].media}?w=140&h=140&fit=crop&auto=format&dpr=2 2x`}
                  alt=''
                  height={140}
                  onClick={handleClickOpenPostUserDialog}
                  style={{ overflow: 'hidden' }}
                />
              ) : (
                <video 
                  height={160} 
                  controls
                  onClick={handleClickOpenPostUserDialog}
                >
                  <source src={item.PostMedia[0].media} type='video/mp4' />
                </video>
              )}
            </ImageListItem>
          ))}
        </ImageList>
      </Card>
      <PostsUserOwnerDialog
        handleClickOpenPostUserDialog={handleClickOpenPostUserDialog}
        openPostUserDialog={openPostUserDialog}
      />
    </>
  );
};
export default StandardImageList;
