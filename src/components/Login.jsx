import React from "react";
import { useState } from "react";
import { loginUser } from "../api";

const Login = ({ setToken, token }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const result = await loginUser(username, password);

          // console.log(result.data.token);
          localStorage.setItem("token", result.data.token);
          // console.log(localStorage)
          setToken(result.data.token)
          // console.log("token", token)
        }}
      >
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
        <input
          value={password}
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
