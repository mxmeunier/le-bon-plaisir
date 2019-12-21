import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Router>
          <HomePage path="/" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
