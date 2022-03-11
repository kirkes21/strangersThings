import React, { useEffect, useState } from "react";

const Login = () => {
  fetch("https://strangers-things.herokuapp.com/api/COHORT-NAME/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: "superman27",
        password: "krypt0n0rbust",
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
    
  return;
};

export default Login;
