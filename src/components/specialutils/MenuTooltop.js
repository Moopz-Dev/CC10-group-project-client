import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const MenuTooltip = ({ handleCloseMenu, anchorEl, open }) => {
  return (
    <div>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCloseMenu}><EditIcon /> Edit</MenuItem>
        <MenuItem onClick={handleCloseMenu} sx={{ color: 'red' }}><DeleteOutlineIcon sx={{ color: 'red' }} /> Delete</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuTooltip;