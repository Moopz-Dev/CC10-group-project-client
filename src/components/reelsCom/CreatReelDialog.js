import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import CreateReels from '../utils/CreateReels';
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from '@mui/system';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const CreatReelDialog = ({
  handleCreateReelDialog,
  openReelDialog
}) => {

  return (
    <div>
      <Dialog
        open={openReelDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCreateReelDialog}
      >
        <DialogActions>
          <Button onClick={handleCreateReelDialog}>
            <ClearIcon sx={{ color: 'darkgray' }} />
          </Button>
        </DialogActions>
        <DialogContent>
          <Box sx={{ width: '300px', height: '300px' }}>
            <CreateReels />
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreatReelDialog;
