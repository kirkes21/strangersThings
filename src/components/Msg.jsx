import React from "react";
import { useState } from "react";
import { addMessage, myUserInfo } from "../api";

const Msg = ({ token, post, idx, setAddMsg, addMsg, setMyUser, myUser }) => {
  const [content, setContent] = useState("");

  const updateMessageBoard = (content, post) => {
    const makeNewObj = {
      content,
      post: {
        title: post.title, 
      },
      fromUser: {
        username: myUser.username,
      }
    }
    const myResults = myUser.messages
    myResults.push(makeNewObj)
    setMyUser({...myUser, messages: myResults})
  }

  return (
    <form
      key={post._id}
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await addMessage(token, post._id, content);
        updateMessageBoard(content, post)
        setContent("");
      }}
    >
      <input
        placeholder="Your message here"
        key={`message: ${idx}`}
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
        required
      ></input>
      <button type="submit">Message</button>
      <button onClick={(e) => {
        e.preventDefault();
        setAddMsg({ ...addMsg, makeMsg: false })
      }}
      >
        Clear
      </button>
    </form>
  );
};

export default Msg;
