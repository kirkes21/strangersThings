import React from "react";
import { useState } from "react";
import { registerUser } from "../api";

const SignUp = ({setToken, token}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const result = await registerUser(username, password);

          localStorage.setItem("token", result.data.token);
          setToken(result.data.token)
          
          console.log(localStorage)
          console.log(token)
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
