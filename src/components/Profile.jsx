import React from "react";
// import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";

const Profile = ({ token, setToken, myUser, setMyUser }) => {
  const handleLogOut = () => {
    // console.log("before clear", localStorage);
    // console.log("before clear", token)

    setToken("");
    localStorage.clear();
    setMyUser({ messages: [], username: "", _id: "" });

    // console.log("after clear", token);
    // console.log("after clear", localStorage);
  };

  const history = useHistory();

  return (
    <>
      <div>
        <div>Your Messages</div>
        {myUser.messages.length ? (
          myUser.messages.map((message, idx) => (
            <div key={`Message Board: ${idx}`}>
              <div>On post: {message.post.title}</div>
              <div>Your message: {message.content}</div>
              <div>Posted by: {message.fromUser.username}</div>
            </div>
          ))
        ) : (
          <div>No messages</div>
        )}
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          handleLogOut();
          history.push("/");
        }}
      >
        <button type="submit">Log Out</button>
      </form>
    </>
  );
};

export default Profile;
