import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components";

reactDom.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById("app")
);
