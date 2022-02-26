import React, { useContext } from 'react';
import { UserDataContext } from '../../context/UserDataContext';
import PostCard from './PostCard';

const MediaCard = () => {
  const { allPost } = useContext(UserDataContext);
  return (
    <>
      {allPost.map((item) => {
        return (
          <>
            <PostCard item={item} />
          </>
        );
      })}
    </>
  );
};

export default MediaCard;
