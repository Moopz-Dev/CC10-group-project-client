import "./message.css";
import React, { useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8080");

function Message({ own }) {
  // const [chat, setChat] = useState([]);

  // useEffect(() => {
  //   socket.on("message", (payload) => {
  //     setChat([...chat, payload]);
  //   });
  // });
  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img
            className="messageImg"
            src="https://images.unsplash.com/photo-1644521350583-8dfe10814851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
          {/* <p className="messageText">{payload.message}</p> */}
        </div>
        <div className="messageBottom">1 hour ago</div>
      </div>
    </>
  );
}

export default Message;
