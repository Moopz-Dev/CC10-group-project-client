import React, { useContext, useEffect, useState } from "react";
import Conversation from "../../components/conversation/Conversation";
import Header from "../../components/utils/Header";
import Message from "../../components/message/Message";
import "./messenger.css";
import ChatOnilne from "../../components/chatOnline/ChatOnilne";
import { AuthContext } from "../../context/AuthContext";
import { Avatar, Button } from "@mui/material";
import axios from "axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import io from "socket.io-client";
import { getToken } from "../../services/localStorage";
import { timeSince } from "../../services/timeSince";

const socket = io("http://localhost:8080");

function Messenger({ username, chats, own }) {
  const { user } = useContext(AuthContext);
  const [conversation, setConversation] = useState([]);
  // const [user, setUser] = useState(null);
  const name = user.username;
  const createdAt = "2022-s02-20T12:17:48.000Z";

  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("message", (payload) => {
      setChat([...chat, payload]);
    });
  });

  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message);
    socket.emit("message", { name, message });
    setMessage("");
  };
  return (
    <>
      <Header />

      <div className="messenger">
        <div className="Arrow-box">
          <ArrowBackIosNewIcon />
        </div>
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            <Conversation username={name} />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              {chat.map((payload, index) => {
                return (
                  <div
                    className={
                      payload.name === "min" ? "message" : "message own"
                    }
                  >
                    <div className="messageTop">
                      <p className="messageText">
                        <span>
                          <Avatar src={user.profileImg} />
                          {payload.name} : {payload.message}
                          {/* {timeSince()} */}
                          {console.log(payload)}
                        </span>
                      </p>
                    </div>
                    <div className="messageBottom">{timeSince(new Date())}</div>
                  </div>
                );
              })}

              {/* <Message own={true} />
              <Message />
              <Message own={true} />
              <Message /> */}
            </div>
            <div className="chatBoxBottom">
              <form className="message_from" onSubmit={sendMessage}>
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  name="message"
                  className="chatMessageInput"
                  placeholder="Message..."
                  required
                ></input>
                <button type="submit" className="chatSummitButton">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">{/* <ChatOnilne /> */}</div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
