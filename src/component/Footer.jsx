// Footer Section
import React from "react";
import { useState, useEffect } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");

  const handleOnChangeEmail = (e) => {
    let emailValue = e.target.value;
    setEmail(emailValue);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnChangeContactDetails = (e) => {
    let contactValue = e.target.value;
    setContact(contactValue);
  };

  const handleOnChangeMsg = (e) => {
    setMsg(e.target.value);
  };

  const handleFormSubmit = (e) => {
    // alert("Form Submitted");
    console.log(e.target);
    // email check
    //message length > 10 ??
    //contct Number isNumber()

    // request call -> server save
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>SaaS Project</h3>
          <p>Empowering businesses with innovative solutions</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <h2> Contact Us Form</h2>

          <form className="footer-form" onSubmit={handleFormSubmit}>
            <input
              name="email"
              placeholder="email"
              className="form-input-field"
              onChange={handleOnChangeEmail}
              value={email}
            />
            <input
              name="Password"
              value={password}
              placeholder="Password"
              className="form-input-field"
              onChange={handleOnChangePassword}
              type={"password"}
            />
            <input
              placeholder="Contact Details"
              className="form-input-field"
              onChange={handleOnChangeContactDetails}
              value={contact}
            />
            <input
              placeholder="Message"
              className="form-input-field"
              onChange={handleOnChangeMsg}
              value={msg}
              style={{ minHeight: 100 }}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SaaS Project. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
