import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import "../src/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                category="general"
                pageSize={9}
                country="in"
                key="general"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                category="entertainment"
                pageSize={9}
                country="in"
                key="entertainment"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
