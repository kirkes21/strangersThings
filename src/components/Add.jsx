import React, { useState } from "react";
import { baseURL } from "../api";

const Add = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const addPost = async () => {
    const response = await fetch(`${baseURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver,
        },
      }),
    });
    const data = await response.json();
    console.log(data);

    setTitle("");
    setDescription("");
    setPrice("");
    setLocation("");
    setWillDeliver(false);

    if (document.querySelector('#willDeliver:checked')) {
      const checkBox = document.querySelector('#willDeliver')
      checkBox.checked = false
    }

    return data;
  };

  return (
    <>
      <h3>New Post</h3>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await addPost();
          console.log(result);
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        ></input>
        <input
          type="checkbox"
          id="willDeliver"
          value={willDeliver}
          onChange={() => setWillDeliver(!willDeliver)}
        ></input>
        <label htmlFor="willDeliver">Will Deliver</label>
        <button type="submit">Post</button>
      </form>
    </>
  );
};

export default Add;
