import React from "react";
import "./message.css";

function Message({ own }) {
  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img
            className="messageImg"
            src="https://images.unsplash.com/photo-1644521350583-8dfe10814851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
          <p className="messageText">
            Hellow this is amessage Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Illo totam voluptatibus vel eveniet distinctio
            nam. Ex, perspiciatis nesciunt sunt enim ratione, dolores id
            accusamus impedit aliquid officiis ab officia assumenda?
          </p>
        </div>
        <div className="messageBottom">1 hour ago</div>
      </div>
    </>
  );
}

export default Message;
