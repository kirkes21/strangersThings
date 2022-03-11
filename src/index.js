import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Main, Add } from "./components";

reactDom.render(
  <Router>
    <Add />
    <Main />
  </Router>,
  document.getElementById("app")
);
