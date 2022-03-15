import React, { useState, useEffect } from "react";
import { Navbar, Add, Get, SignUp, Login, Logout } from "./index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Main = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
const localStorageToken = localStorage.getItem('token')
if(localStorageToken) {
  setToken(localStorageToken)
  console.log('currentToken', token)
}
  }, [token])

  return (
    <Router>
      <div className="main_container">
        <Navbar token={token} />
        <Switch>
          <Route path="/signup">
            <SignUp setToken={setToken} token={token} />
          </Route>
          <Route path="/add">
            <Add token={token} />
          </Route>
          <Route path="/login">
            <Login setToken={setToken} token={token} />
          </Route>
          <Route path="/logout">
            <Logout setToken={setToken} token={token} />
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
