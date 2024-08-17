import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./app.css";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import { useThemeContext } from "./hooks/useThemeContext";

function App() {
  const { isDarkMode } = useThemeContext();
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages pt-4 px-4 md:px-0 lg:px-0 bg-gray-100 dark:bg-gray-900 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/jobs" element={<Jobs />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
