import React from "react";
import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PostAddIcon from "@mui/icons-material/PostAdd";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { Paper } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box sx={{ pb: 7 }}>
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
              marginLeft: "15px",
              alignSelf: "center",
              fontFamily: "cookie",
              fontSize: "2rem",
            }}
          >
            Instagrum
          </div>
          <div style={{ width: 250 }}>
            <BottomNavigationAction icon={<PostAddIcon />} />
            <BottomNavigationAction icon={<FavoriteBorderOutlinedIcon />} />
            <BottomNavigationAction icon={<ChatOutlinedIcon />} />
          </div>
        </Paper>
      </Box>
    </>
  );
};

export default Header;
