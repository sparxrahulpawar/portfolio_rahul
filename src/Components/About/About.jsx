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
              I am a passionate Full-Stack Developer with 2+ years of
              professional experience, currently working at Kylient Software
              Solutions Pvt. Ltd. Alongside my full-time role, I am pursuing a
              Master’s degree through distance learning at Lovely Professional
              University (LPU).
            </p>
            <p>
              With expertise in Node.js, React, Next.js, and databases like
              MySQL, PostgreSQL, and MongoDB, I specialize in building scalable,
              high-performance web applications. I have strong proficiency in
              JavaScript, RESTful APIs, and third-party API integrations,
              allowing me to develop robust and efficient solutions.
            </p>
            <p>
              I actively leverage modern development tools such as GitHub,
              Bitbucket, Postman, and VS Code to enhance workflow efficiency and
              maintain high-quality coding standards. Staying up to date with
              the latest industry trends, I am committed to continuous learning
              and innovation in web development.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: "80%" }} />
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
              <p>MongoDB</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
          <div className="about-achivements">
            <div className="about-achivement">
              <CountUp targetNumber={2.4} decimalPlaces={1} />
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
              <CountUp targetNumber={5} />
              <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achivement">
              <CountUp targetNumber={4} />
              <p>HAPPY CLIENTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
