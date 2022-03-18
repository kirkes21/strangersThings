import React from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ setToken, myUser, setMyUser }) => {
  const handleLogOut = () => {
    setToken("");
    localStorage.clear();
    setMyUser({ messages: [], username: "", _id: "" });
  };

  const history = useHistory();

  return (
    <>
      <div>
        <h2>Sent Messages</h2>
        {myUser.messages.length ? (
          myUser.messages.map((message, idx) =>
            message.fromUser.username === myUser.username ? (
              <div key={`Inbox: ${idx}`}>
                <div>On post: {message.post.title}</div>
                <div>Your message: {message.content}</div>
              </div>
            ) : null
          )
        ) : (
          <div>No messages</div>
        )}

        <h2>Inbox</h2>
        {myUser.messages.length ? (
          myUser.messages.map((message, idx) =>
            message.fromUser.username !== myUser.username ? (
              <div key={`Inbox: ${idx}`}>
                <div>On post: {message.post.title}</div>
                <div>Your message: {message.content}</div>
                <div>Posted by: {message.fromUser.username}</div>
              </div>
            ) : null
          )
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
