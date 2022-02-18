import Home from "./pages/home/Home.js";
import ReelsPage from "./pages/reels/ReelsPage/ReelsPage";
import Messenger from "./pages/messenger/Messenger.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Comment from "./pages/comment/Comment.js";
import UserProfile from "./pages/user/UserProfile.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalStory from "./components/utils/ModalStory.js";
import Stories from "./components/utils/Stories.js";
import UserUnkown from "./components/user/userUnknown/UserUnkown.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
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
