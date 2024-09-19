import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
