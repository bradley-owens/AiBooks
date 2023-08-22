import React, { useRef } from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import "./Navigation.css";

const Navigation = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header>
      <div className="logo-container">
        <h2>AI Books</h2>
        <ThemeToggle />
      </div>
      <nav ref={navRef}>
        <a href="/">How it works</a>
        <a href="/">Bookkeeping</a>
        <a href="/">Pricing</a>
        <a href="/">Sign up</a>
        <button className="nav-button nav-close-button" onClick={showNavBar}>
          <i style={{ cursor: "pointer" }} className="fa-solid fa-x fa-lg"></i>
        </button>
      </nav>
      <button className="nav-button" onClick={showNavBar}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
};

export default Navigation;
