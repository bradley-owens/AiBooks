import "./index.css";
import Hero from "./components/hero/Hero";
import ThemeToggle from "./components/themeToggle/ThemeToggle";
import useLocalStorage from "use-local-storage";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="app" data-theme={theme}>
      <Navigation switchTheme={switchTheme} />
      <Hero />
    </div>
  );
}

export default App;
