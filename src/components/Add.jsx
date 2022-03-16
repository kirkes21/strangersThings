import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import { baseURL, addPost } from "../api";

const Add = ({ token, posts, setPosts }) => {
  const [formState, setFormState] = useState(
    { title: "",
      description: "",
      price: "",
      location: "",
      willDeliver: false,
    }
  )
  console.log("posts from inside add", posts)
  const history = useHistory()
  // const addPost = async () => {
  //   const response = await fetch(`${baseURL}/posts`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({
  //       post: {
  //         title,
  //         description,
  //         price,
  //         location,
  //         willDeliver,
  //       },
  //     }),
  //   });
    // const data = await response.json();
    // console.log(data);

    


  return (
    <>
      <h3>New Post</h3>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await addPost(formState);
          setPosts([...posts, result])
          history.push("/")
          
          console.log(result);
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setFormState({...formState, title: event.target.value})}
        ></input>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setFormState({...formState, description: event.target.value})}
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
        {/* <button type="clear">Clear Form</button> */}
      </form>
    </>
  );
};

export default Add;
