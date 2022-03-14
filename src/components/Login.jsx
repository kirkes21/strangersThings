import react from "react";
import { useState } from "react";


const Login = ({setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (username, password, ) => {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/COHORT-NAME/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password
          },
        }),
      }
    )
    const data = await response.json();
    console.log(data)
    localStorage.setItem("token", response.data.token);
    setToken("token", response.data.token);
    return data;
      // .then((response) => response.json())
      // .then((result) => {
      //   console.log(result.data.token);
      //   return result.data.token;
      // })
      // .catch(console.error);
  };

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const result = await loginUser(username, password);

          console.log(result)
          localStorage.setItem("token", result.data.token);
          setToken("token", result.data.token);
          
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
