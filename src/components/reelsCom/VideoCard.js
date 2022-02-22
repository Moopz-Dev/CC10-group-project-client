import React, { useRef, useState, useEffect } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader.js";
import VideoFooter from "./VideoFooter.js";
import VideoSidebar from "./VideoSidebar.js";
// import VideoBottomNav from "./VideoBottomNav.js";
import Navbar from "../../components/utils/Navbar";
import useElementOnScreen from "./hook";

function VideoCard({
  avatarSrc,
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) {
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // const videoRef = useRef(null);

  // const onVideoPress = () => {
  //   if (!isVideoPlaying) {
  //     videoRef.current.play();
  //     setIsVideoPlaying(true);
  //   } else {
  //     videoRef.current.pause();
  //     setIsVideoPlaying(false);
  //   }
  // };
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const isVisibile = useElementOnScreen(options, videoRef);
  const onVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(!playing);
    } else {
      videoRef.current.play();
      setPlaying(!playing);
    }
  };
  useEffect(() => {
    if (isVisibile) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, [isVisibile]);

  return (
    <>
      <div className="videoCard">
        <VideoHeader />
        <video
          loop
          preload="true"
          ref={videoRef}
          onClick={onVideoClick}
          className="video_player"
          src={url}
          alt="IG REEL"
        />
        <VideoFooter
          avatarSrc={avatarSrc}
          channel={channel}
          description={description}
          song={song}
        />
        <div className="nav">
          <Navbar />
        </div>
        <VideoSidebar likes={likes} messages={messages} shares={shares} />
      </div>
    </>
  );
}

export default VideoCard;
