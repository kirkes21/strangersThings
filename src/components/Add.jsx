import React, { useEffect, useState } from "react";

const Add = () => {
    const [title, setTitle] = useState([])
    const [description, setDescription] = useState([])

const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(title, description)
    fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer TOKEN_STRING_HERE'
  },
  body: JSON.stringify({
    post: {
      title: "My favorite stuffed animal",
      description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
      price: "$480.00",
      willDeliver: true
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}

    return <>
        <h3>New Post</h3>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='title' value={title} onChange={(ev) => setTitle(event.target.value)}></input>
        <input type='text' placeholder='description' value={description} onChange={(ev) => setDescription(event.target.value)}></input>
        </form>
        </>
}

export default Add