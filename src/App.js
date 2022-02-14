import Home from "./pages/Home/Home.js";
import ReelsPage from "./pages/reels/ReelsPage/ReelsPage";
import Messenger from "./pages/messenger/Messenger.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Comment from "./pages/Comment/Comment.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/mesenger" element={<Messenger />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
