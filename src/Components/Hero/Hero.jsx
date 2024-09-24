import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_pic from "../../assets/profile_pic.jpg";
import resume from "../../assets/rahul.pawar.cv.pdf"

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "rahul.pawar.cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="home" className="hero">
      <img src={profile_pic} alt="profile-pic" />
      <h1>
        <span>I'm Rahul Pawar,</span> Full Stack Developer
      </h1>
      <p>A enthusiast developer from Indore with 1.8 years of exprience</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div onClick={handleDownload} className="hero-resume">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
