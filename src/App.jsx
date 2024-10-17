import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Sidenav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Experience />
                <Projects />
                <Resume />
              </>
            }
          />
          <Route
            path="/project-details/:projectId"
            element={<ProjectDetails />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
