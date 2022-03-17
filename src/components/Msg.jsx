import React from "react";
import { useState } from "react";
import { addMessage } from "../api";

const Msg = ({ token, post, idx, setAddMsg, addMsg }) => {
  const [content, setContent] = useState("");

  return (
    <form
      key={post._id}
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await addMessage(token, post._id, content);
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
