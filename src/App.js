import Home from "./pages/home/Home.js";
import ReelsPage from "./pages/reels/ReelsPage/ReelsPage";
import Messenger from "./pages/messenger/Messenger.jsx";
import Login from "./pages/login/LoginPage.js";
import Register from "./pages/register/Register.js";
import Comment from "./pages/comment/Comment.js";
import UserProfile from "./pages/user/UserProfile.js";
import Stories from "./components/utils/Stories.js";
import UserUnkown from "./components/user/userUnknown/UserUnkown.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalStory from "./components/utils/ModalStory.js";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  console.log(user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/mesenger" element={<Messenger />} />
        <Route path="/test" element={<ModalStory />} />
        <Route path="/story" element={<Stories />} />
        <Route path="/userunknown" element={<UserUnkown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
