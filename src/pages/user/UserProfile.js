import { Box } from '@mui/system'
import React from 'react'
import MultiNavUserProfile from '../../components/user/MultiNavUserProfile'
import StandardImageList from '../../components/user/StandardImageList'
import UserBio from '../../components/user/UserBio'
import UserHeader from '../../components/user/UserHeader'
import Navbar from '../../components/utils/Navbar'

const UserProfile = () => {
  return (
    <Box>
        <UserHeader />
        <UserBio />
        <MultiNavUserProfile />
        <StandardImageList />
        <Navbar />
    </Box>
  )
}

export default UserProfile