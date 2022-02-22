import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from '@mui/system';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const CreateStoryDialog = ({ handleCreateStoryDialog, openStoryDialog }) => {
  return (
    <div>
      <Dialog
        open={openStoryDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCreateStoryDialog}
        fullScreen={true}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={handleCreateStoryDialog}>
            <ClearIcon sx={{ color: 'gray' }} />
          </Button>

          <DialogTitle sx={{ textAlign: 'center' }}>
            {'Create story'}
          </DialogTitle>
          <Box sx={{ width: '50px' }}></Box>
        </Box>
        <DialogContent>
          <form>
            {/* for input and preview file */}
            <input type='file' accept='video/mp4, image/*' placeholder='select video from device' />
          </form>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button sx={{ background: 'lightgray', borderRadius: '50px', color: 'black' }}>Post your story</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateStoryDialog;
