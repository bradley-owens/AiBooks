import React from "react";
import { useActions } from "../../hooks/useActions";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { switchTheme } = useActions();

  return (
    <div className="theme-toggle">
      <i
        onClick={switchTheme}
        className="fas fa-toggle-on"
        data-testid="theme-toggle-button"
      ></i>
    </div>
  );
};

export default ThemeToggle;
