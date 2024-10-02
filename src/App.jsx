import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Experience />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
