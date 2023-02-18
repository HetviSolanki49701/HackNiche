import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [selected, setSelected] = useState("Child-Care");
  const navigate = useNavigate();
  return (
    <div className="sideBody">
      <div className="navigation">
        <ul>
          <li
            className={`list ${selected === "Child-Care" && "active"}`}
            onClick={() => {
              setSelected("Child-Care");
            }}
          >
            <Link to="/childcare">
              <span className="icon">
              <ion-icon name="heart-outline"></ion-icon>
              </span>
              <span className="title">Child-Care</span>
            </Link>
          </li>
          <li
            className={`list ${selected === "Health-Care" && "active"}`}
            onClick={() => {
              setSelected("Health-Care");
            }}
          >
            <Link to="/healthcare">
              <span className="icon">
              <ion-icon name="medkit-outline"></ion-icon>
              </span>
              <span className="title">Health-Care</span>
            </Link>
          </li>
          <li
            className={`list ${selected === "Jobs" && "active"}`}
            onClick={() => {
              setSelected("Jobs");
            }}
          >
            <Link to="/jobs">
              <span className="icon">
              <ion-icon name="briefcase-outline"></ion-icon>
              </span>
              <span className="title">Jobs</span>
            </Link>
          </li>
          <li
            className={`list ${selected === "Pension Management" && "active"}`}
            onClick={() => {
              setSelected("Pension Management");
            }}
          >
            <Link to="/pension">
              <span className="icon">
                <ion-icon name="cash-outline"></ion-icon>
              </span>
              <span className="title">Pension Management</span>
            </Link>
          </li>
          <li
            className={`list ${selected === "Schemes" && "active"}`}
            onClick={() => {
              setSelected("Schemes");
            }}
          >
            <Link to="/schemes">
              <span className="icon">
              <ion-icon name="book-outline"></ion-icon>
              </span>
              <span className="title">Schemes</span>
            </Link>
          </li>
          <li
            className={`list ${selected === "Relocate" && "active"}`}
            onClick={() => {
              setSelected("Relocate");
            }}
          >
            <Link to="/relocationpage">
              <span className="icon">
                <ion-icon name="location-outline"></ion-icon>
              </span>
              <span className="title">Relocate</span>
            </Link>
          </li>
          <li
            className={`list ${selected === "signout" && "active"}`}
            onClick={() => {
              setSelected("signout");
            }}
          >
            <Link to="/login">
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
