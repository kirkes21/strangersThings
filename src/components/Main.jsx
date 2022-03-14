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
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          {/* <Route path="/logout">
            <Get />
          </Route> */}
          <Route path="/">
            <Get />
            {/* <Edit />
            <Delete /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
