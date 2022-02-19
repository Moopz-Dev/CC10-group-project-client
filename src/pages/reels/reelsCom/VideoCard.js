import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader.js";
import VideoFooter from "./VideoFooter.js";
import VideoSidebar from "./VideoSidebar.js";
// import VideoBottomNav from "./VideoBottomNav.js";
import Navbar from "../../../components/utils/Navbar";

function VideoCard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <>
      <div className="videoCard">
        <VideoHeader />
        <video
          ref={videoRef}
          onClick={onVideoPress}
          className="video_player"
          src="https://media.istockphoto.com/videos/cats-toy-relax-time-video-id1326909247"
          alt="IG REEL"
          loop
        />
        <VideoFooter />
        <div className="nav">
          <Navbar />
        </div>
        <VideoSidebar />
      </div>
    </>
  );
}

export default VideoCard;
