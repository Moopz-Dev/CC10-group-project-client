import React from 'react'
import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PostAddIcon from "@mui/icons-material/PostAdd";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Paper, Typography } from "@mui/material";
import SendOutlined from '@mui/icons-material/SendOutlined';

const HeaderComment = () => {
  return (
    <>
    <Box sx={{ pb: 7, borderBottom: '1px solid lightgray' }}>
        {/* <CssBaseline /> */}
        <Paper
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "space-between",
            zIndex: 1100,
          }}
          elevation={0}
        >
          <div
            style={{
              width: '10px'
            }}
          >
            <BottomNavigationAction icon={<ArrowBackIosNewIcon />} />
          </div>
          <div style={{ marginTop: '15px' }}>
            <Typography>Comments</Typography>
          </div>
          <div></div>
        </Paper>
      </Box>
    </>
  )
}

export default HeaderComment