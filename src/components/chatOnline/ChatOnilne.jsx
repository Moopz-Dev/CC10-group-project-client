import React from "react";
import "./chatOnline.css";

function ChatOnilne() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://images.unsplash.com/photo-1644521350583-8dfe10814851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Jenny Kim</span>
      </div>
    </div>
  );
}

export default ChatOnilne;
