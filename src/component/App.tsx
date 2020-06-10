import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Shell from "./shell/Shell";
import Landing from "./landing/Landing";

// Styles
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="wrapper flex flex-col w-screen h-screen">
        <Landing />
      </div>
    </Router>
  );
}

export default App;
