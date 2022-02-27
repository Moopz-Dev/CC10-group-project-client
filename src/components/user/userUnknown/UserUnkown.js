import React from 'react';
import UserUnknownBio from './UserUnknownBio';
import UserUnknownHeader from './UserUnknownHeader';
import Navbar from '../../utils/Navbar';


const UserUnkown = () => {
  return (
    <>
      <UserUnknownHeader />
      <UserUnknownBio />
      <Navbar />
    </>
  );
};

export default UserUnkown;
