import React, { useContext, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { deletePost } from '../../apis/post';
import EditPostDialog from './EditPostDialog';


const MenuTooltip = ({ handleCloseMenu, anchorEl, open, items }) => {
  const [openEditPostDialog, setOpenEditPostDialog] = useState(false);

  const handleClickEditPostDialog = () => {
    setOpenEditPostDialog(!openEditPostDialog);
  };
  console.log(items)

  const fetchDeletePost = async () => {
    try {
      const res = await deletePost(items.id)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  const handleDeleteMyPost = () => {
    fetchDeletePost();
  }
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
        <MenuItem onClick={handleClickEditPostDialog}><EditIcon /> Edit</MenuItem>
        <MenuItem onClick={handleDeleteMyPost} sx={{ color: 'red' }}><DeleteOutlineIcon sx={{ color: 'red' }} /> Delete</MenuItem>
      </Menu>
      <EditPostDialog handleClickEditPostDialog={handleClickEditPostDialog} openEditPostDialog={openEditPostDialog} />
    </div>
  );
};

export default MenuTooltip;