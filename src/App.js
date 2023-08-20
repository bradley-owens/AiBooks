import "./App.css";
import Hero from "./components/hero/Hero";
import useLocalStorage from "use-local-storage";
import Navigation from "./components/navigation/Navigation";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  // const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    var element = document.body;
    element.classList.toggle("body-dark");
  };

  return (
    <div className="app" data-theme={theme}>
      <Navigation switchTheme={switchTheme} />
      <Hero />
    </div>
  );
}

export default App;
