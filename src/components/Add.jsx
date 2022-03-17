import React, { useState } from "react";
import { addPost } from "../api";
import { useHistory } from "react-router-dom";

const Add = ({ token, posts, setPosts }) => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    willDeliver: false,
  });

  const history = useHistory();


  return (
    <>
      <h3>New Post</h3>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await addPost(token, formState);
          setPosts([...posts, result.data.post]);
          history.push("/");

          console.log(result);
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={formState.title}
          onChange={(event) =>
            setFormState({ ...formState, title: event.target.value })
          }
          required
        ></input>
        <input
          type="text"
          placeholder="Description"
          value={formState.description}
          onChange={(event) =>
            setFormState({ ...formState, description: event.target.value })
          }
          required
        ></input>
        <input
          type="text"
          placeholder="Price"
          value={formState.price}
          onChange={(event) =>
            setFormState({ ...formState, price: event.target.value })
          }
          required
        ></input>
        <input
          type="text"
          placeholder="Location"
          value={formState.location}
          onChange={(event) =>
            setFormState({ ...formState, location: event.target.value })
          }
        ></input>
        <input
          type="checkbox"
          id="willDeliver"
          value={formState.willDeliver}
          onChange={() =>
            setFormState({ ...formState, willDeliver: !willDeliver })
          }
        ></input>
        <label htmlFor="willDeliver">Will Deliver</label>
        <button type="submit">Post</button>
      </form>
    </>
  );
};

export default Add;
