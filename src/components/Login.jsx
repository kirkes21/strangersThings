import react from "react";
import { useState } from "react";
import { loginUser } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const result = await loginUser(username, password);

          console.log(result);
          localStorage.setItem("token", result.data.token);
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
