import Home from "./pages/Home/Home.js";
import ReelsPage from "./pages/reels/ReelsPage/ReelsPage";
import Messenger from "./pages/messenger/Messenger.jsx";
import Login from "./components/auth/login/Login.jsx";
import RegisterPage from "./pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext.js";

function App() {
  // const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/mesenger" element={<Messenger />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
