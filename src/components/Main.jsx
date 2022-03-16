import React, { useState, useEffect } from "react";
import { Navbar, Add, Get, SignUp, Login, Profile } from "./index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { myUserInfo, fetchPosts } from "../api";

const Main = () => {
  const [token, setToken] = useState("");
  const [myUserId, setMyUserId] = useState("");
  const [myMessages, setMyMessages] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const displayPosts = async () => {
      const newData = await fetchPosts(token);
      setPosts(newData)
    }
    displayPosts()
  }, []);

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      setToken(localStorageToken);
      console.log("currentToken", token);
    }
  }, [token]);

  useEffect(() => {
    const getMyUserFunction = async () => {
      if (token) {
        const result = await myUserInfo(token);
        // console.log(result);
        setMyUserId(result.data._id);
        setMyMessages(result.data.messages);
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
              myMessages={myMessages}
              setMyMessages={setMyMessages}
            />
          </Route>
          <Route path="/">
            <Get token={token} myUserId={myUserId} posts={posts} />
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
