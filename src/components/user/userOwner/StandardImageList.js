import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import MultiNavUserProfile from './MultiNavUserProfile';
import PostsUserOwnerDialog from './PostsUserOwnerDialog';

const StandardImageList = ({ userPosts }) => {
  const [openPostUserDialog, setOpenPostUserDialog] = useState(false);

  const handleClickOpenPostUserDialog = () => {
    setOpenPostUserDialog(!openPostUserDialog);
  };

  return (
    <>
      <MultiNavUserProfile />
      <ImageList
        sx={{
          width: 390,
          minHeight: '410px',
          margin: 0,
          overflow: 'visible'
        }}
        cols={3}
        rowHeight={140}
        gap={1}
      >
        {userPosts.map((item) => (
          <ImageListItem
            key={item.PostMedia[0].media}

          >
            <img
              src={`${item.PostMedia[0].media}?w=160&h=160&fit=crop&auto=format`}
              srcSet={`${item.PostMedia[0].media}?w=160&h=160&fit=crop&auto=format&dpr=2 2x`}
              alt=''
              height={140}
              onClick={handleClickOpenPostUserDialog}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <PostsUserOwnerDialog
        handleClickOpenPostUserDialog={handleClickOpenPostUserDialog}
        openPostUserDialog={openPostUserDialog}
      />
    </>
  );
};
export default StandardImageList;
