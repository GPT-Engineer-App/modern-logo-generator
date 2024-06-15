import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import GenerateLogo from "./pages/GenerateLogo";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/generate" element={<GenerateLogo />} />
      </Routes>
    </Router>
  );
};

export default App;
