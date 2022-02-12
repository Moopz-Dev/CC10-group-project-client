import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";
import "./VideoFooter.css";
import { Avatar, Button } from "@mui/material";

function VideoFooter({ avatarSrc }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          @Amime · <Button>Follow</Button>
        </h3>
        <p>
          Cats were first domesticated
          <Button>...more</Button>
        </p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>TokyoRevegence</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://cdn0.iconfinder.com/data/icons/doodle-audio-video-game/91/Audio_-_Video_-_Game_40-512.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
