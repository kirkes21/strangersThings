import React, { useState, useEffect } from "react";
import { Navbar, Add, Get, SignUp, Login, Profile } from "./index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { myUserInfo, fetchPosts } from "../api";

const Main = () => {
  const [token, setToken] = useState("");
  const [myUser, setMyUser] = useState({
    messages: [],
    username: "",
    _id: "",
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const displayPosts = async () => {
      const data = await fetchPosts(token);
      setPosts(data);
    };
    displayPosts();
  }, []);

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      setToken(localStorageToken);
      console.log("currentToken from localStorage", token);
    }
  }, [token]);

  useEffect(() => {
    const getMyUserFunction = async () => {
      if (token) {
        const result = await myUserInfo(token);
        setMyUser({
          messages: result.data.messages,
          username: result.data.username,
          _id: result.data._id,
        });
      }
    };
    getMyUserFunction();
  }, [token]);

  return (
    <Router>
      <div className="main_container">
        <Navbar token={token} />
        <Switch>
          <Route path="/signup">
            <SignUp setToken={setToken} token={token} />
          </Route>
          <Route path="/add">
            <Add token={token} setPosts={setPosts} posts={posts} />
          </Route>
          <Route path="/login">
            <Login setToken={setToken} token={token} />
          </Route>
          <Route path="/profile">
            <Profile
              setToken={setToken}
              token={token}
              myUser={myUser}
              setMyUser={setMyUser}
            />
          </Route>
          <Route path="/">
            <Get
              token={token}
              posts={posts}
              setPosts={setPosts}
              myUser={myUser}
              setMyUser={setMyUser}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
