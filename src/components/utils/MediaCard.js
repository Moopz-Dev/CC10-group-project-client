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
          </>
        );
      })}
    </>
  );
};

export default MediaCard;
