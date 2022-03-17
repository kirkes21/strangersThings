import React, { useState } from "react";
import { loginUser } from "../api";
import { useHistory } from "react-router-dom";

const Login = ({ setToken, token }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const result = await loginUser(username, password);

          // console.log("before set storage", localStorage)
          // console.log("before set", token);
          
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token)
          
          // console.log("after set storage", localStorage)
          // console.log("after set", token)

          history.push("/");
        }}
      >
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          required
        />
        <input
          value={password}
          type="text"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
