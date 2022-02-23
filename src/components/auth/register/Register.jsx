import React, { useState, useContext } from "react";
import "./register.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import axios from "../../../config/axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FacebookLoginButton from "../FacebookLoginButton";
import { ErrorContext } from "../../../context/ErrorContext";
import Swal from "sweetalert2";

function Register() {
  const [username, setUserName] = useState("");

  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const { setError } = useContext(ErrorContext);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setError("");
      const res = await axios.post("/auth/register", {
        username,
        email,
        phoneNumber,
        password,
        confirmPassword,
      });
      navigate("/login");
    } catch (err) {
      Swal.fire(err.response.data.message);
    }
  };

  return (
    <div className="container-res">
      <div className="backbtn">
        <ArrowBackIosNewIcon />
      </div>
      <div className="container">
        <div className="gambar">
          <img
            className="Image"
            src="https://res.cloudinary.com/dylx9cg6q/image/upload/v1644645470/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD_2565-02-12_%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2_12.57.22_hbxjbm.png"
            alt=" "
          />
        </div>
        <div className="card-wrapper">
          <div className="card top">
            <div className="logo-box">
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
                alt=""
                width="100%"
              />
            </div>
            <form onSubmit={handleRegister}>
              <div className="form">
                <input
                  type="text"
                  className="input"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <input
                  type="password"
                  className="input"
                  placeholder="Confrim Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button className="loginbtn" type="submit">
                  Register
                </button>
              </div>
            </form>
            <p className="ortag">⎯⎯⎯⎯ OR ⎯⎯⎯⎯</p>
            {/* <a href="#" className="login-facebook">
              <FacebookIcon />
              Continue with facebook
            </a> */}
            <FacebookLoginButton />
            <div className="error-box"></div>
          </div>
          <div className="card bottom">
            <p className="bottom-text">
              Already have an account ?{" "}
              <Link to="/login" className="signup-link">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
