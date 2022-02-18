import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
import GridOnIcon from '@mui/icons-material/GridOn';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MultiNavUserProfile = () => {
  return (
    <>
    <Box sx={{ width: 390 }}>
        <Paper
          sx={{
            display: 'flex',
          }}
          elevation={1}
        >
            <BottomNavigationAction icon={<GridOnIcon />} />
            <BottomNavigationAction icon={<VideoLibraryIcon />} />
            <BottomNavigationAction icon={<PlayArrowIcon />} />
        </Paper>
      </Box>
    </>
  )
}

export default MultiNavUserProfile