import React from "react";
import "./Navigation.css";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navigation = ({ switchTheme }) => {
  return (
    <nav>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <h2>AI Books</h2>
        <ThemeToggle switchTheme={switchTheme} />
      </div>
      <div className="links-container">
        <a href="#">How it works</a>
        <a href="#">Bookkeeping</a>
        <a href="#">Pricing</a>
        <a href="#" id="sign-up">
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
