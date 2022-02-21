import React from "react";
import "./conversation.css";

function Conversation({ username }) {
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://images.unsplash.com/photo-1644521350583-8dfe10814851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      />
      <span className="conversationName">{username}</span>
    </div>
  );
}

export default Conversation;
