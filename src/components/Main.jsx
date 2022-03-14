import React, { useState } from "react";
import { Navbar, Add, Get, SignUp, Login } from "./index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Main = () => {
  const [token, setToken] = useState("");

  return (
    <Router>
      <div className="main_container">
        <Navbar />
        <Switch>
          <Route path="/signup">
            <SignUp setToken={setToken} />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route path="/logout">
            {localStorage.clear()}
            <Get />
          </Route>
          <Route path="/">
            <Get />
            {/* {token ? (
              <>
                <Edit />
                <Delete />
              </>
            ) : null} */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
