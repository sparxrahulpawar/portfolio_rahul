import React from "react";
import "./About.css";
import underline from "../../assets/underline.svg";
import profile_pic from "../../assets/profile_pic2.png";
import CountUp from "../../SubComponents/CountUp";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={underline} alt="text-logo-image" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_pic} alt="profile-image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate Full Stack Developer with 1.8 years of
              professional experience, currently employed at Kylient Software
              Solutions Pvt. Ltd. While working full-time, I am also pursuing my
              Master’s degree through distance learning at Lovely Professional
              University (LPU).
            </p>
            <p>
              With a strong foundation in Node.js, React, Next.js, and databases
              like MySQL, PostgreSQL, and MongoDB, I specialize in crafting
              dynamic, scalable web applications. My expertise extends to
              JavaScript, RESTful APIs, and seamless integration of third-party
              APIs, enabling me to deliver robust, high-performance solutions.
            </p>
            <p>
              I am proficient in utilizing modern development tools such as
              GitHub, Bitbucket, Postman, and VS Code to enhance productivity
              and ensure streamlined, efficient workflows. My commitment to
              writing clean, maintainable code reflects my focus on long-term
              project success. Constantly evolving, I actively keep up with
              industry trends and advancements to stay at the cutting edge of
              technology.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>MySql</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Postgress</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
          <div className="about-achivements">
            <div className="about-achivement">
              <CountUp targetNumber={1.8} decimalPlaces={1} />
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
              <CountUp targetNumber={4} />
              <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achivement">
              <CountUp targetNumber={3} />
              <p>HAPPY CLIENTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
