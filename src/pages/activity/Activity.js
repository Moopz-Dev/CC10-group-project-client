import { Container } from '@mui/material'
import React from 'react'
import ActivityHeader from '../../components/activity/ActivityHeader'
import ActivityList from '../../components/activity/ActivityList';
import Navbar from '../../components/utils/Navbar';

const Activity = () => {
  return (
    <Container maxWidth="sm" >
        <ActivityHeader />
        <ActivityList />
        <Navbar />
    </Container>
  )
}

export default Activity