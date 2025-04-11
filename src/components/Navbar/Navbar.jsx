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
          {/* <li className="link">Product</li>
          <li className="link">Resource</li>
          <li className="link">Pricing</li> */}
          <li className="link-item-1">
            Book a demo{" "}
            <span>
              <RiArrowRightFill size={16} style={{ marginBottom: "-3.5px" }} />
            </span>
          </li>
          <li className="link-item-2">
            Start free trial <img src={Umbrella_icon} alt="" />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
