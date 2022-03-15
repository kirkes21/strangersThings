import React, { useState } from "react";

const Add = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const addPost = async () => {

    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/COHORT-NAME/posts",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            willDeliver,
          },
        }),
      }
    )
    const data = await response.json();
    console.log(data)
  };

  return (
    <>
      <h3>New Post</h3>
      <form onSubmit={async (event) => {
        event.preventDefault();
      const result = await addPost()
      console.log(result)
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
          type="checkbox"
          id="willDeliver"
          value={willDeliver}
          onChange={(event) => setWillDeliver(event.target.value)}
        ></input>
        <label htmlFor="willDeliver">Will Deliver</label>
        <button type="submit">Post</button>
      </form>
    </>
  );
};

export default Add;
