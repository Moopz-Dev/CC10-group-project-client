import React from 'react'
import { Container } from '@mui/material'
import UserBio from '../../components/user/UserBio'
import UserHeader from '../../components/user/UserHeader'
import Navbar from '../../components/utils/Navbar'

const UserProfile = () => {
  return (
    <Container maxWidth='sm'>
        <UserHeader />
        <UserBio />
        <Navbar />
    </Container>
  )
}

export default UserProfile