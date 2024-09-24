import React from "react";
import "./Contact.css";
import underline from "../../assets/underline.svg";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import address from "../../assets/address.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "34c5df1b-407f-4f83-b923-b68b314f2c92");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact Us</h1>
        <img src={underline} alt="theme-pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
            nihil.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email} alt="email-icon" />
              <p>rahul.pawar.web@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone} alt="call-no" />
              <p>+91 9826563046</p>
            </div>
            <div className="contact-detail">
              <img src={address} alt="location-icon" />
              <p>Indore M.P INDIA</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter you message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
