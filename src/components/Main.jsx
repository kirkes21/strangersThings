import React from "react";
import { Navbar, Add, Get, SignUp } from "./index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Main = () => {
  return (
    <Router>
      <div className="main_container">
        <Navbar />
        <Add />
        <Get />
        <Switch>
          <Route
            path="/signup"
            render={() => {
              return <SignUp />;
            }}
          />
          <Route
            path="/somethingGoesHere"
            render={() => {
              return; //component to render;
            }}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
