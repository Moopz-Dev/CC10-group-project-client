import { Container } from '@mui/material'
import React from 'react'
import HeaderSearch from '../../components/searchFriend/HeaderSearch'
import Navbar from '../../components/utils/Navbar'

const SearchFriend = () => {
  return (
    <>

        <Container sx={{ height: '100vh' }}>
            <HeaderSearch />
            <Navbar />
        </Container>
    </>
  )
}

export default SearchFriend