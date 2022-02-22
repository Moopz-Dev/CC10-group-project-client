import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PostAddIcon from "@mui/icons-material/PostAdd";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import CreatePostDialog from "./CreatePostDialog";
import CreateReels from "./CreateReels";

const Header = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    bottom: false,
  });
  const [openDialog, setOpenDialog] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClickDialog = (text) => {
    console.log(text);
    if (text === "Post") {
      handleCreatePostDialog();
    } else if (text === "Reels") {
      navigate("/postreels");
    }
  };

  const handleCreatePostDialog = () => {
    setOpenDialog(!openDialog);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        component="div"
        sx={{
          textAlign: "center",
          padding: "15px 0 10px 0",
          fontSize: "1.2rem",
          fontWeight: "500",
        }}
      >
        Create
      </Box>
      <List>
        {["Post", "Reels", "Story"].map((text, index) => (
          <ListItem button key={text} onClick={() => handleClickDialog(text)}>
            <ListItemIcon on>
              {index === 0 && <GridOnOutlinedIcon />}
              {index === 1 && <InboxIcon />}
              {index === 2 && <MusicVideoIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <CreatePostDialog
        handleCreatePostDialog={handleCreatePostDialog}
        openDialog={openDialog}
      />
      <Box sx={{ pb: 7 }}>
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
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Box
              sx={{
                marginLeft: "15px",
                alignSelf: "center",
                fontFamily: "cookie",
                fontSize: "2rem",
              }}
            >
              Instagrum
            </Box>
          </Link>

          <Box sx={{ width: 250 }}>
            {["bottom"].map((anchor) => (
              <React.Fragment key={anchor}>
                <BottomNavigationAction
                  icon={<PostAddIcon />}
                  onClick={toggleDrawer(anchor, true)}
                >
                  {anchor}
                </BottomNavigationAction>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}

            <BottomNavigationAction icon={<FavoriteBorderOutlinedIcon />} />
            <Link to="/mesenger">
              <BottomNavigationAction icon={<ChatOutlinedIcon />} />
            </Link>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Header;
