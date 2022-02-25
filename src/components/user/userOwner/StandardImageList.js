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

  return (
    <>
      <MultiNavUserProfile />
      <Card sx={{ marginBottom: '29px' }}>
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
              <img
                src={`${item.PostMedia[0].media}?w=140&h=140&fit=crop&auto=format`}
                srcSet={`${item.PostMedia[0].media}?w=140&h=140&fit=crop&auto=format&dpr=2 2x`}
                alt=''
                height={140}
                onClick={handleClickOpenPostUserDialog}
                style={{ overflow: 'hidden' }}
              />
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
