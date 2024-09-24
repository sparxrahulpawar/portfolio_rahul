import React, { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import nav_logo from "../../assets/nav_logo1.png";
import underline from "../../assets/underline.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={nav_logo} alt="nav logo" />
      <img
        src={""}
        onClick={openMenu}
        alt="menu-icon"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          onClick={closeMenu}
          src=""
          alt="close-icon-mobile"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>

          {menu === "home" ? (
            <img src={underline} alt="underline-svg" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About me</p>
          </AnchorLink>

          {menu === "about" ? (
            <img src={underline} alt="underline-svg" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>

          {menu === "services" ? (
            <img src={underline} alt="underline-svg" />
          ) : (
            <></>
          )}
        </li>
        {/* <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            {" "}
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>

          {menu === "work" ? (
            <img src={underline} alt="underline-svg" />
          ) : (
            <></>
          )}
        </li> */}
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>

          {menu === "contact" ? (
            <img src={underline} alt="underline-svg" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
