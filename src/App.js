import Home from "./pages/Home/Home.js";
import ReelsPage from "./pages/reels/ReelsPage/ReelsPage";
import Messenger from "./pages/messenger/Messenger.jsx";
import Login from "./pages/Login/LoginPage";
import Register from "./pages/Register/Register";
import Comment from "./pages/Comment/Comment.js";
import UserProfile from "./pages/user/UserProfile.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ModalStory from "./components/utils/ModalStory.js";
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = (token, userId) => {
    setToken(token);
    setUserId(userId);
  };

  // const logout = () => {
  //   setToken(null);
  //   setUserId(null);
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/ome" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/mesenger" element={<Messenger />} />
        <Route path="/test" element={<ModalStory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
