import { Box, Container } from '@mui/material'
import React from 'react'
import HeaderSearch from '../../components/searchFriend/HeaderSearch'
import Navbar from '../../components/utils/Navbar'

const SearchFriend = () => {
  return (
    <Box>
            <HeaderSearch />
            <Navbar />
    </Box>
  )
}

export default SearchFriend