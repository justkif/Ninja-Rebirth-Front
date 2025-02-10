import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import GetOne from "./components/Main/GetOne";
import "./App.css";

function App() {
  const [isMobile, setMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
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
    <Router> {}
      <div className="h-screen px-4 py-4 bg-gradient-to-b from-orange-400 to-yellow-30 ">
        <Navbar isMobile={isMobile} />
        <Routes> {}
          <Route path="/" element={<Main />} /> {}
          <Route path="/ninja/:id" element={<GetOne />} /> {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
