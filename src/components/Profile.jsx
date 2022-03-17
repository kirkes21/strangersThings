import React from "react";
// import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ token, setToken, myMessages, setMyMessages }) => {
  const handleLogOut = () => {
    // console.log("before clear", localStorage);
    // console.log("before clear", token)

    setToken("");
    localStorage.clear();

    // console.log("after clear", token);
    // console.log("after clear", localStorage);
  };

  const history = useHistory();

  // const fetchMessages = async () => {
  //   const response = await fetch(`${baseURL}/posts/${id}/messages`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({
  //       message: {
  //         content,
  //       },
  //     }),
  //   });
  //   const data = await response.json();
  //   console.log("Fetch msgs: ", data);
  //   setMyMessages(data);
  //   return data;
  // };

  // useEffect(() => {
  //   const getMessages = async () => {
  //     await fetchMessages();
  //   };
  //   getMessages();
  // }, [myMessages.length]);

  return (
    <>
      <div>
        <div>Your Messages</div>
        {myMessages.length ? (
          myMessages.map((myMessage, idx) => (
            <div key={myMessage._id}>{myMessage.content}</div>
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
