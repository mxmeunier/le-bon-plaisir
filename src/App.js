import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import EnterPage from "./pages/EnterPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Router>
          <EnterPage path="/enter" />
          <HomePage path="/" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
