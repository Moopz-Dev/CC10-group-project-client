import React from "react";
import "../../styles/createReels/CreateReels.css";
import { Box } from "@mui/system";
import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
function CreateReels() {
  return (
    <div className="container-res">
      <div className="backbtn">{/* <ArrowBackIosNewIcon /> */}</div>
      <div className="container">
        <div className="card-wrapper">
          <div className="videos_box">
            <div className="card bottom">
              <Player
                playsInline
                src="https://res.cloudinary.com/dylx9cg6q/video/upload/v1645259658/videos/maehongsorn_xies77.mp4"
                fluid={false}
                width={480}
                height={250}
              ></Player>
            </div>
          </div>
          <div className="card top">
            <form>
              <div className="form">
                <input
                  type="text"
                  className="input"
                  placeholder="Video Url"
                  required
                />
                <br></br>
                <input
                  type="text"
                  className="input"
                  placeholder="channel name"
                  required
                />
                <br></br>
                <input
                  type="text"
                  className="input"
                  placeholder="description"
                  required
                  autoComplete="on"
                />
                <br></br>
                <input
                  type="text"
                  className="input"
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
