import React from "react";
import "./Footer.css";
import googleStore_icon from "../../assets/googleStore_icon.png";
import appStore from "../../assets/appStore_icon.png";
import Mail_icon from "../../assets/mail.png";
import Instagram_icon from "../../assets/instagram.png";
import LinkedIn_icon from "../../assets/linkedin.png";
import Twitter_icon from "../../assets/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer-container">
        <div className="footer-top">
          <div className="footer-left">
            <h1>
              Achieve Operational Excellence with <span>Ruut</span>
            </h1>
            <p className="footer-text">
              Streamline processes, boost efficiency, and unlock your team's
              full potential with Ruut’s innovative solutions. Transform your
              operations into a competitive advantage.
            </p>
            <div className="stores">
              <img src={googleStore_icon} alt="" />
              <img src={appStore} alt="" />
            </div>
          </div>
          <div className="footer-right">
            <ul className="links">
              <li>Products</li>
              <li>Omini-channel</li>
              <li>Automation</li>
              <li>Campaigns</li>
              <li>Knowledge Base</li>
            </ul>
            <ul className="links">
              <li>Company</li>
              <li>About</li>
              <li>Contact</li>
              <li>Partners</li>
              <li>Pricing</li>
            </ul>
            <ul className="links">
              <li>Industries</li>
              <li>SMEs</li>
              <li>Enterprise</li>
              <li>Startups</li>
              <li>Customer Success</li>
            </ul>
            <ul className="links">
              <li>Resources</li>
              <li>Blogs</li>
              <li>Tutorials</li>
              <li>Channel Logs</li>
              <li>Docs</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="left">Made with ❤️ in Lagos</div>
          <div className="center">Ruut Chat</div>
          <div className="right">
            <img src={Mail_icon} alt="" />
            <img src={Instagram_icon} alt="" />
            <img src={LinkedIn_icon} alt="" />
            <img src={Twitter_icon} alt="" />
          </div>
        </div>
      </div> */}
      <hr />
      <div className="container">
        <div className="footer-left">Made with ❤️ in Lagos</div>
        <h3 className="nav-logo">Ruut Chat</h3>
        <div className="right">
          <img src={Mail_icon} alt="" />
          <img src={Instagram_icon} alt="" />
          <img src={LinkedIn_icon} alt="" />
          <img src={Twitter_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
