import React from "react";

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
