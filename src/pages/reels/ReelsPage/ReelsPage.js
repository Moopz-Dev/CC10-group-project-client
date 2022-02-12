import React from "react";
import VideoCard from "../reelsCom/VideoCard";
import "./ReelPage.css";

function ReelsPage() {
  return (
    <div className="reels">
      <div className="reels_videos">
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default ReelsPage;
