import React, { useState } from "react";
import "./CreateReels.css";
import { Box } from "@mui/system";
import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
import axios from "axios";

function CreateReels() {
  const [videUrl, setVideoUrl] = useState("");
  const [message, setMessage] = useState("");
  const [song, setSong] = useState("");

  const PostReels = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("message", message);

    console.log(formData);
    axios.post("/posts/", formData).then((res) => console.log(res));
  };

  return (
    <div className="containers-res">
      <div className="containers">
        <div className="cards-wrapper">
          <div className="videos_box">
            <div className="cards top">
              {/* <Player
                playsInline
                src="https://res.cloudinary.com/dylx9cg6q/video/upload/v1645259658/videos/maehongsorn_xies77.mp4"
                fluid={false}
                width={350}
                height={200}
              ></Player> */}
            </div>
          </div>
          <div className="cards bottom">
            <form>
              <div className="form">
                <input
                  type="text"
                  className="inputs"
                  placeholder="Video Url"
                  required
                />
                <br></br>
                <input
                  type="text"
                  className="inputs"
                  placeholder="description"
                  required
                  autoComplete="on"
                />
                <br></br>
                <input
                  type="text"
                  className="inputs"
                  placeholder="Song name"
                  required
                  autoComplete="on"
                />
                <br></br>
                <button className="postbtn">Post</button>
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
