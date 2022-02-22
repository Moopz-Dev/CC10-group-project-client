import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateReels.css";
import { Box } from "@mui/system";
import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
import axios from "axios";

function CreateReels() {
  const [media, setMedia] = useState("");
  const [message, setMessage] = useState("");
  const [song, setSong] = useState("");

  const navigate = useNavigate();

  const handlePostReels = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/reels", {
        media,
        message,
        song,
      });
      navigate("/");
    } catch (err) {}
  };

  return (
    <div className="containers-res">
      <div className="containers">
        <div className="cards-wrapper">
          <div className="top-text">
            <h1>Upload your Reels</h1>
          </div>
          <div className="videos_box"></div>
          <div className="cards bottom">
            <form onSubmit={handlePostReels}>
              <div className="form">
                <input
                  type="text"
                  className="inputs"
                  placeholder="Video Url"
                  required
                  value={media}
                  onChange={(e) => setMedia(e.target.value)}
                />
                <br></br>
                <input
                  type="text"
                  className="inputs"
                  placeholder="description"
                  required
                  autoComplete="on"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <br></br>
                <input
                  type="text"
                  className="inputs"
                  placeholder="Song name"
                  required
                  autoComplete="on"
                  value={song}
                  onChange={(e) => setSong(e.target.value)}
                />
                <br></br>
                <button className="postbtn" type="submit">
                  Post
                </button>
                <button className="postbtn discard">Discard</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateReels;
