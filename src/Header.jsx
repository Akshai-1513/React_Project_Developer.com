import React from "react";
import "./styles/Header.css";
import Logo from "./assets/logo.png";
import Searchlogo from "./assets/search-icon.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="logo-container">
            <a href="/" className="logo-link">
              <img src={Logo} alt="developer.com" className="logo" />
              <span className="logo-text">developer.com</span>
            </a>
          </div>
          
            <div className="header-content">
              <a href="/" className="content-link">
                <span className="content">About us</span>
              </a>
              <a href="/" className="content-link">
                <span className="content">Features</span>
              </a>
              <a href="/" className="content-link">
                <span className="content">How it works</span>
              </a>
            </div>

          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <img src={Searchlogo} className="search-logo" alt="search-logo" />
          </div>
          <div className="sign-up">
            <button className="button-sign-up">
              Sign-up
            </button>
          </div>
          <div className="log-in">
            <button className="button-log-in">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
