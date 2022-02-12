import React from "react";
import "./login.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Login() {
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
            <div className="form">
              <input
                type="text"
                className="input"
                placeholder="Phone number, username, or email"
              />
              <input type="password" className="input" placeholder="Password" />
              <br></br>
              <div className="forgot-box">
                <a href="#" className="forget-password">
                  Forgot password ?
                </a>
              </div>
              <br></br>
              <button className="loginbtn">Login</button>
            </div>
            <p className="ortag">OR</p>
            <a href="#" className="login-facebook">
              <FacebookIcon />
              Login with facebook
            </a>
          </div>
          <div className="card bottom">
            <p className="bottom-text">
              Dont't have an account ?{" "}
              <a href="#" className="signup-link">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
