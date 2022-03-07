import React from "react";
import { useNavigate } from "react-router";
import Logo from "../Logo/Logo";
import LoginForm from "../LoginForm/LoginForm";
import Info from "../Info/Info";
import logout from "../../assets/log-out.svg";
import "./Sidebar.css";

const Sidebar = ({ type }) => {
  const history = useNavigate();
  const token = sessionStorage.getItem("token");

  // page type checking for rendering correct component
  let isLogin = type === "login" ? true : false;
  let isDemo = type === "demo" ? true : false;

  const handleClick = (path) => {
    // Token gets removed when clicked on Logout button
    sessionStorage.removeItem("token");
    history(path);
  };

  return (
    <div className="sidebar-container">
      {isLogin && (
        <>
          <Logo text="Segmentation Fault API Test" />
          <LoginForm />
          <div></div>
          <Info />
        </>
      )}
      {isDemo && token &&(
        <>
          <div
            className="logoutContainer"
            onClick={() => handleClick("/login")}
          >
            <div className="logout-text">Log Out</div>
            <img src={logout} alt="Log Out" />
          </div>
          <Logo text="Segmentation Fault API Test" />
          <h4 className="alert-text">You Are Logged In!</h4>
        </>
      )}
    </div>
  );
};

export default Sidebar;
