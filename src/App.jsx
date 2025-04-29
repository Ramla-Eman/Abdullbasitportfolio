import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkPage from "./pages/WorkPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="bg-bg text-text font-poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workpage" element={<WorkPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
