import React, { useContext } from 'react';
import { UserDataContext } from '../../../context/UserDataContext';
import PostCards from './PostCards';

export default function PostUserCard() {
  const { userPosts } = useContext(UserDataContext);
  console.log(userPosts);

  return (
    <>
      {userPosts.map((item) => {
        return (
          <>
            <PostCards items={item} />
          </>
        );
      })}
    </>
  );
};

