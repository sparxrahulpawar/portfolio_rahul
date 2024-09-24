import React from "react";
import "./MyWork.css";
import { mywork_data } from "../../assets/mywork_data";
import underline from "../../assets/underline.svg"
import arrow from "../../assets/arrow1.png"

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={underline} alt="theme-pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="work-image" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="arow-icon" />
      </div>
    </div>
  );
};

export default MyWork;
