import "./index.css";
import Form from "./components/form/Form";
import ThemeToggle from "./components/themeToggle/ThemeToggle";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="app" data-theme={theme}>
      <h1>AI Books</h1>
      <Form />
      <ThemeToggle switchTheme={switchTheme} />
    </div>
  );
}

export default App;
