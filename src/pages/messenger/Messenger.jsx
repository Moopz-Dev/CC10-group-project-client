import React, { useContext, useEffect, useState } from "react";
import Conversation from "../../components/conversation/Conversation";
import Header from "../../components/utils/Header";
import Message from "../../components/message/Message";
import "./messenger.css";
import ChatOnilne from "../../components/chatOnline/ChatOnilne";
import { AuthContext } from "../../context/AuthContext";

function Messenger() {
  // const { user } = useContext(AuthContext);
  // const [user, setUser] = useState(null);
  return (
    <>
      <Header />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <d iv className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message own={true} />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="Message..."
              ></textarea>
              <button className="chatSummitButton">Send</button>
            </div>
          </d>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnilne />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
