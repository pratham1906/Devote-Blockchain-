import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p style={{color:'white'}}>
          View this project on{" "}
          <a
            className="profile"
            href="https://github.com/pratham1906"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p style={{color:'white'}}>
          Made with <i className="fas fa-heartbeat" style={{color:'white'}}/> by{" "}
          <a
            className="profile"
            href="https://pratham1906.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pratham Meghani
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
