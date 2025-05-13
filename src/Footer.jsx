import { useState } from 'react';
import './styles/Footer.css';
import WhatApp from "./assets/Whatsapp_logo.png";
import Email from "./assets/mail_logo.png";
import Linkedin from "./assets/linkedin_logo.png";
import Call from "./assets/call_logopng.png"


function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-logo">
            <h2 className="company-name">Developer</h2>
            <p className="company-slogan">Your trusted partner in excellence</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Products</a></li>
              </ul>
            </div>
            
            
            <div className="footer-section">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Events</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-contact">
          <h3>Connect With Us</h3>
          <div className="contact-icons">
            <a href="/" className="contact-icon">
              <img src={Email} alt="Email" className="icon" />
            </a>
            <a href="/" className="contact-icon">
              <img src= {WhatApp} alt="WhatsApp" className="icon" />
            </a>
            <a href="/" className="contact-icon">
              <img src={Call} alt="Phone" className="icon" />
            </a>
            <a href="/" className="contact-icon">
              <img src={Linkedin} alt="LinkedIn" className="icon" />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Developer. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#">Terms & Conditions</a>
            <span className="divider">|</span>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer