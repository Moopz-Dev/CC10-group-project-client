import React from "react";
import "./VideoHeader.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function VideoHeader() {
  return (
    <div className="video_header">
      <h3>Reels</h3>
      <CameraAltIcon />
    </div>
  );
}

export default VideoHeader;
