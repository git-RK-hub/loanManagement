import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="about">
        <h3>About</h3>
        <ul className="footer-list">
          <li>Our Story</li>
          <li>Lorem espum</li>
          <li>Contact</li>
          <li>Jobs</li>
        </ul>
      </div>
      <div className="resources">
        <h3>Resources</h3>
        <ul className="footer-list">
          <li>FAQs</li>
          <li>Blog</li>
          <li>Support</li>
          <li>Developer APIs</li>
        </ul>
      </div>
      <div className="legal">
        <h3>Legal</h3>
        <ul className="footer-list">
          <li>Privacy</li>
          <li>Terms of Services</li>
          <li>Security</li>
        </ul>
      </div>
      <div className="Stay Connected">
        <h3>Stay Connected</h3>
        <ul className="footer-list eicons">
          <li>
            <i className="fab fa-instagram eicon"></i>
          </li>
          <li>
            <i className="fab fa-facebook-square eicon"></i>
          </li>
          <li>
            <i className="fab fa-twitter-square eicon"></i>
          </li>
          <li>
            <i className="fab fa-linkedin eicon"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
