import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Components
import HomePage from "./Pages/homePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
