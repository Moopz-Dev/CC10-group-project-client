import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";
import "./VideoFooter.css";
import { Avatar, Button } from "@mui/material";
import "@lottiefiles/lottie-player";
import { color } from "@mui/system";

function VideoFooter({ avatarSrc, channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} · <Button>Follow</Button>
        </h3>
        <p>
          {description}
          <Button>...more</Button>
        </p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <div className="lottie-box">
        <lottie-player
          className="lottie"
          autoplay
          loop
          mode="normal"
          src="https://assets9.lottiefiles.com/packages/lf20_hg8raphs.json"
          style={{ width: "130px" }}
        ></lottie-player>
      </div>
      <img
        className="videoFooter__record"
        src="https://cdn2.iconfinder.com/data/icons/multimedia-26/24/multimedia-59-512.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
