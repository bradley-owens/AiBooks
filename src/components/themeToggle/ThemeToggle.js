import React from "react";
import "./ThemeToggle.css";

const ThemeToggle = ({ switchTheme }) => {
  return (
    <div className="theme-toggle">
      <i
        onClick={switchTheme}
        className="theme-toggle i"
        class="fas fa-toggle-on"
      ></i>
    </div>
  );
};

export default ThemeToggle;
