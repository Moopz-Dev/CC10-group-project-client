import { Container } from '@mui/material'
import React from 'react'
import HeaderSearch from '../../components/searchFriend/HeaderSearch'
import Navbar from '../../components/utils/Navbar'

const SearchFriend = () => {
  return (
    <>

        <Container maxWidth='sm'>
            <HeaderSearch />
            <Navbar />
        </Container>
    </>
  )
}

export default SearchFriend