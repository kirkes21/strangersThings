import React, { useEffect, useState } from "react";

export const registerUser = async (username, password) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/COHORT-NAME/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  );

  const data = await response.json();
  return data;
};

export const loginUser = async (username, password) => {
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
          password,
        },
      }),
    }
  );
  const data = await response.json();
  return data;
};