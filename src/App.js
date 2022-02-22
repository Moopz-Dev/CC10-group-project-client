import Home from "./pages/home/Home.js";
import ReelsPage from "./pages/reels/ReelsPage/ReelsPage";
import Messenger from "./pages/messenger/Messenger.jsx";
import Login from "./pages/login/LoginPage.js";
import Register from "./pages/register/Register.js";
import Comment from "./pages/comment/Comment.js";
import UserProfile from "./pages/user/UserProfile.js";
import Stories from "./components/utils/Stories.js";
import UserUnkown from "./components/user/userUnknown/UserUnkown.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ModalStory from "./components/utils/ModalStory.js";
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { getToken } from "./services/localStorage.js";
import Loading from "./pages/Loading/Loading.jsx";
import PostReels from "./pages/postReels/PostReels.js";
import SearchFriend from "./pages/search/SearchFriend.js";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {getToken() ? (
        !user ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/reels" element={<ReelsPage />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/searchfriend" element={<SearchFriend />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/mesenger" element={<Messenger />} />
            <Route path="/test" element={<ModalStory />} />
            <Route path="/story" element={<Stories />} />
            <Route path="/postreels" element={<PostReels />} />
            <Route path="/userunknown" element={<UserUnkown />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )
      ) : (
        <Routes>
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
