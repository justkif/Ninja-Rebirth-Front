import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main/Main";
import Login from "./components/Login";
import "./App.css";

export default function App() {
  const [isMobile, setMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);

  return (
    <Router>
      <div className="h-screen px-4 py-4 bg-gradient-to-b from-orange-400 to-yellow-30">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<><Navbar isMobile={isMobile} /><Main /></>} />
        </Routes>
      </div>
    </Router>
  );
}
