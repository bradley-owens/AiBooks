import Hero from "./components/hero/Hero";
import Navigation from "./components/navigation/Navigation";
import { useAppSelector } from "./hooks/useAppSelector";
import "./App.css";

function App() {
  const { theme } = useAppSelector((state) => state.website);

  return (
    <div className="app" data-theme={theme}>
      <Navigation />
      <Hero />
    </div>
  );
}

export default App;
