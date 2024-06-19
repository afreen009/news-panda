import React from "react";
import News from "./Components/News/News";
import '../src/index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
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
            path="/general"
            element={
              <News
                category="general"
                pageSize={9}
                country="in"
                key="general"
              />
            }
          />
          {/* <Route
            path="/business"
            element={
              <News
                category="business"
                pageSize={9}
                country="in"
                key="business"
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
          <Route
            path="/sports"
            element={
              <News category="sports" pageSize={9} country="in" key="sports" />
            }
          />

          <Route
            path="/science"
            element={
              <News
                category="science"
                pageSize={9}
                country="in"
                key="Science"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News category="health" pageSize={9} country="in" key="health" />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                category="technology"
                pageSize={9}
                country="in"
                key="technology"
              />
            }
          /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
