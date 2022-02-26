import React from 'react';
import UserBio from '../../components/user/userOwner/UserBio';
import UserHeader from '../../components/user/userOwner/UserHeader';
import Navbar from '../../components/utils/Navbar';

const UserProfile = () => {
  return (
    <>
      <UserHeader />
      <UserBio />
      <Navbar />
    </>
  );
};

export default UserProfile;
