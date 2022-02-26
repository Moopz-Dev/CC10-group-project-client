import { ChatEngine } from "react-chat-engine";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../apis/user";
// import ChatFeed from "./components/ChatFeed";
// import LoginForm from "./components/LoginForm";
import "./messenger.css";
import { AuthContext } from "../../context/AuthContext";
import { BottomNavigationAction } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Messenger = () => {
  // if (!localStorage.getItem("username")) return <LoginForm />;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const name = user.username;

  return (
    <>
      <BottomNavigationAction
        icon={<ArrowBackIosNewIcon />}
        onClick={(e) => navigate("/")}
      />
      <ChatEngine
        height="95vh"
        projectID="f39583ad-eee1-4282-9512-e804ac94f8c5"
        userName={name}
        userSecret="qwer1234"
        // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </>
  );
};

// infinite scroll, logout, more customizations...

export default Messenger;
