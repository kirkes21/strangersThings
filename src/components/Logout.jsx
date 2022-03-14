import React from "react";
import { useState } from "react";

const Logout = ({ token, setToken }) => {
  //   function logout() {
  //     setToken("")
  //     localStorage.clear()
  //   }
  //     return (
  //         logout()
  //   )

  localStorage.clear();
  console.log("before clear token: ", token);
  setToken("");
  console.log("after clear token: ", token);

  return null;
};

export default Logout;
