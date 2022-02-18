import { Container } from '@mui/material'
import React from 'react'
import UserUnknownBio from './UserUnknownBio';
import UserUnknownHeader from './UserUnknownHeader';
import Navbar from '../../utils/Navbar'
import PrivateAccount from './PrivateAccount';


const UserUnkown = () => {
  return (
    <Container maxWidth='sm'>
      <UserUnknownHeader />
      <UserUnknownBio />
      <PrivateAccount />
      <Navbar />
    </Container>
  )
}

export default UserUnkown;