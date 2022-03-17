import React from "react";
import { useState } from "react";
import { addMessage } from "../api";

const Msg = ({ post, idx }) => {
  const [content, setContent] = useState("");

  return (
    <form
      key={post._id}
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await addMessage(token, post._id, content);
        setContent("");

        // console.log(result);
        // setMyUser({ ...myUser, messages: [...messages, content] });
        // console.log(myUser.messages);
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
    </form>
  );
};

export default Msg;
