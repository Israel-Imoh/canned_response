import React from "react";
import "./Navbar.css";
import { RiArrowRightFill } from "react-icons/ri";
import Umbrella_icon from "../../assets/SVG.png";
import logo from "../../assets/ruutlogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* <h3 className="nav-logo">Ruut Chat</h3> */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          {/* f */}
          <a href="https://cal.com/ruut-csm" target="_blank">
            <li className="link-item-1">
              Book a demo{" "}
              <span>
                <RiArrowRightFill
                  size={16}
                  style={{ marginBottom: "-3.5px" }}
                />
              </span>
            </li>
          </a>
          <a href="https://app.ruut.chat/app/login" target="_blank">
            <li className="link-item-2">
              Start free trial <img src={Umbrella_icon} alt="" />{" "}
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
