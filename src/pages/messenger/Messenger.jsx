import React, { useContext, useEffect, useState } from "react";
import Conversation from "../../components/conversation/Conversation";
import Header from "../../components/utils/Header";
import Message from "../../components/message/Message";
import "./messenger.css";
import ChatOnilne from "../../components/chatOnline/ChatOnilne";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Messenger({ username }) {
  const { user } = useContext(AuthContext);
  const [conversation, setConversation] = useState([]);
  // const [user, setUser] = useState(null);
  const name = user.username;

  useEffect(() => {
    const getConversations = axios.get("/conversation");
  });
  return (
    <>
      <Header />
      <div className="Arrow-box">
        <ArrowBackIosNewIcon />
      </div>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            <Conversation username={name} />
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
