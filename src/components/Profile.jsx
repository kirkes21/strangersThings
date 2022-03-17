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
