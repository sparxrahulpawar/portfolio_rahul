import React, { useState, useEffect } from "react";
import "./Hero.css";
import { motion } from "framer-motion"; // Import Framer Motion
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_pic from "../../assets/profile_pic.jpg";
import resume from "../../assets/rahul.pawar.cv.pdf";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Rahul Pawar";
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 1000; // Pause between typing and deleting

  useEffect(() => {
    let timeoutId;
    if (!isDeleting && text.length === fullText.length) {
      // Pause when typing is complete
      timeoutId = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      // Pause before retyping
      timeoutId = setTimeout(() => setIsDeleting(false), pauseTime);
    } else {
      // Typing or deleting characters
      timeoutId = setTimeout(
        () => {
          setText((prevText) =>
            isDeleting
              ? fullText.substring(0, prevText.length - 1)
              : fullText.substring(0, prevText.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting]);

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
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I'm&nbsp;
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          {text}
        </motion.span>
        , Full Stack Developer
      </h1>
      <p>A enthusiast developer from Indore with 1.8 years of experience</p>
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
