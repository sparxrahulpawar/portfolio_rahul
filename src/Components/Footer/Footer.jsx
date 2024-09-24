import React from "react";
import "./Footer.css";
import nav_logo from "../../assets/nav_logo1.png";
import user from "../../assets/user.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="foorter-top-left">
          <img src={nav_logo} alt="footer-logo" />
          <p>A enthusiast developer from Indore with 1.8 years of exprience</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user} alt="user-icon" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2024 Rahul Pawar. All right are reserved{" "}
        </p>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
