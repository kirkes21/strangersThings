import React from "react";
import { useState } from "react";

const Profile = ({ token, setToken, myMessages }) => {
  const handleLogOut = () => {
    // console.log("before clear", localStorage);
    // console.log("before clear", token)

    setToken("");
    localStorage.clear();

    // console.log("after clear", token);
    // console.log("after clear", localStorage);
  };

  return (
    <>
      <div>
        <div>Your Messages</div>
        {myMessages.length ? (
          myMessages.map((myMessage, idx) => (
            <div key={myMessage._id}>{myMessage}</div>
          ))
        ) : (
          <div>No messages</div>
        )}
      </div>
      {/* ^^^Does it work?^^^ */}

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          handleLogOut();
        }}
      >
        <button type="submit">Log Out</button>
      </form>
    </>
  );
};

export default Profile;
