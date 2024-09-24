import React from "react";
import "./Services.css";
import { services_data } from "../../assets/services_data";
import underline from "../../assets/underline.svg"
import arrow from "../../assets/arrow1.png"

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={underline} alt="theme-pattern" />
      </div>
      <div className="services-container">
        {services_data.map((service, index) => {
          return (
            <div key={index} className="service-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow} alt="arow-icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
