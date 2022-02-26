import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getFollowersCount, getFollowingCount } from '../apis/follow';
import { getMyPosts, getAllPosts } from '../apis/post';

const UserDataContext = createContext();

const UserDataContextProvider = ({ children }) => {
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [userPosts, setUserPosts] = useState([]);
  const [allPost, setAllPost] = useState([]);

  const { user } = useContext(AuthContext);

  const fetchFollowersCount = async () => {
    if (!user) return;
    try {
      const res = await getFollowersCount(user.id);
      const result = res.data;

      setFollowerCount(result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchFollowingCount = async () => {
    if (!user) return;
    try {
      const res = await getFollowingCount(user.id);
      const result = res.data;

      setFollowingCount(result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchGetMePosts = async () => {
    if (user) {
      try {
        const res = await getMyPosts();
        const result = res.data;
        console.log(result);

        setUserPosts(result);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchFollowersCount();
    fetchFollowingCount();
    fetchGetMePosts();
  }, [user]);

  const fetchAllPost = async () => {
    try {
      const res = await getAllPosts();
      const result = res.data;
      console.log(result)

      setAllPost(result);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchAllPost();
  }, []);

  return (
    <UserDataContext.Provider
      value={{ followerCount, followingCount, userPosts, fetchGetMePosts, allPost, fetchAllPost }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;

export { UserDataContext };
