import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./app.css";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import { useThemeContext } from "./hooks/useThemeContext";

function App() {
  const { isDarkMode } = useThemeContext();

  // Determine the theme class based on dark mode status
  const themeClass = isDarkMode ? "dark" : "light";

  return (
    <div className={themeClass}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <main className="pages min-h-screen pt-4 px-4 md:px-0 lg:px-0 bg-gray-100 dark:bg-gray-900">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/jobs" element={<Jobs />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
