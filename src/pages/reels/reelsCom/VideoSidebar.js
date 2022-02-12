import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="medium" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button send">
        <SendOutlinedIcon fontSize="medium" />
        <p>{shares}</p>
      </div>
      <div className="videoSidebar__button morebtn">
        <MoreHorizOutlinedIcon />
      </div>
    </div>
  );
}

export default VideoSidebar;
