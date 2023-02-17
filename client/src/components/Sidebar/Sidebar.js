import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [selected, setSelected] = useState("Home");

  return (
    <div className="sideBody">
      <div className="navigation">
        <ul>
          <li
            className={`list ${selected === "Home" && "active"}`}
            onClick={() => {
              setSelected("Home");
            }}
          >
            <Link to="/">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="title">Home</span>
            </Link>
          </li>
          <li
            className={`list ${selected === "Profile" && "active"}`}
            onClick={() => {
              setSelected("Profile");
            }}
          >
            <Link to="/profile">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className="title">Profile</span>
            </Link>
          </li>
          <li
            className={`list ${selected === "Messages" && "active"}`}
            onClick={() => {
              setSelected("Messages");
            }}
          >
            <Link to="/profile">
              <span className="icon">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </span>
              <span className="title">Messages</span>
            </Link>
          </li>
          <li
            className={`list ${selected === "Settings" && "active"}`}
            onClick={() => {
              setSelected("Settings");
            }}
          >
            <Link to="/profile">
              <span className="icon">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </span>
              <span className="title">Settings</span>
            </Link>
          </li>
          <li
            className={`list ${selected === "Help" && "active"}`}
            onClick={() => {
              setSelected("Help");
            }}
          >
            <Link to="/profile">
              <span className="icon">
                <ion-icon name="help-outline"></ion-icon>
              </span>
              <span className="title">Help</span>
            </Link>
          </li>
          <li
            className={`list ${selected === "Password" && "active"}`}
            onClick={() => {
              setSelected("Password");
            }}
          >
            <Link to="/profile">
              <span className="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <span className="title">Password</span>
            </Link>
          </li>
          <li
            className={`list ${selected === "signout" && "active"}`}
            onClick={() => {
              setSelected("signout");
            }}
          >
            <Link to="/profile">
              <span className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="title">Sign Out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
