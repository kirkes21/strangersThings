import React, { useEffect, useState } from "react";

export const registerUser = async (username, password) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/COHORT-NAME/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
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
  console.log(data);
  return data;
};
