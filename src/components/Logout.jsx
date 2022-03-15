import React from "react";
import { useState } from "react";

const Logout = ({ token, setToken }) => {
  const handleLogOut = () => {

    // console.log("before clear", localStorage);
    // console.log("before clear", token)

    setToken('');
    localStorage.clear();

    // console.log("after clear", token);
    // console.log("after clear", localStorage);
  };

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          handleLogOut();
        }}
      >
          <button type="submit">Log Out</button>
      </form>
    </div>
  );
};

export default Logout;
