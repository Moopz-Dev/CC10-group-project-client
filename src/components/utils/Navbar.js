import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  return (
    <>
      <Box sx={{ pb: 7 }} ref={ref}>
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1100 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Link to='/'>
              <BottomNavigationAction icon={<HomeIcon />} />
            </Link>
            <BottomNavigationAction icon={<SearchIcon />} />
            <Link to='/reels'>
              <BottomNavigationAction icon={<MovieCreationIcon />} />
            </Link>
            <BottomNavigationAction icon={<ShoppingBagIcon />} />
            <Link to='/user'>
              <BottomNavigationAction icon={<AccountCircleIcon />} />
            </Link>
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
};

export default Navbar;
