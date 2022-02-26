import React, { useContext, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { deletePost } from '../../apis/post';
import EditPostDialog from './EditPostDialog';
import { UserDataContext } from '../../context/UserDataContext';


const MenuTooltip = ({ handleCloseMenu, anchorEl, open, items }) => {
  const [openEditPostDialog, setOpenEditPostDialog] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const { fetchGetMePosts } = useContext(UserDataContext)

  const handleClickEditPostDialog = () => {
    setOpenEditPostDialog(!openEditPostDialog);
  };
  // console.log(items)

  const fetchDeletePost = async () => {
    try {
      const res = await deletePost(items.id)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  const handleClosDelete = () => {
    setOpenDelete(!openDelete)
  }

  const handleDeleteMyPost = async () => {
    await fetchDeletePost();
    handleCloseMenu()
    await fetchGetMePosts();

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