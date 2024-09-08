import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Experience />
    </div>
  );
}

export default App;
