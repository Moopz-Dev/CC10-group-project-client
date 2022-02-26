import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getFollowersCount, getFollowingCount } from '../apis/follow';
import { getMyPosts } from '../apis/post';

const UserDataContext = createContext();

const UserDataContextProvider = ({ children }) => {
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [userPosts, setuserPosts] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
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
    fetchFollowersCount();
  }, [user]);

  useEffect(() => {
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
    fetchFollowingCount();
  }, [user]);

  useEffect(() => {
    const fetchGetMePosts = async () => {
      if (user) {
        try {
          const res = await getMyPosts();
          const result = res.data;

          setuserPosts(result);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchGetMePosts();
  }, [user]);

  return (
    <UserDataContext.Provider
      value={{ followerCount, followingCount, userPosts }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;

export { UserDataContext };
