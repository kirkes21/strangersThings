import React, { useEffect, useState } from "react";
import { baseURL } from "../api";

const Get = ({ token, myUserId }) => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const fetchPosts = async () => {
    const response = await fetch(`${baseURL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setPosts(data.data.posts);
    console.log(data.data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    const response = await fetch(`${baseURL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    fetchPosts();
    // const result = await response.json();
    // console.log(response);
    // console.log("Result: ", result);
  };

  const addMessage = async (id, content) => {
    const response = await fetch(`${baseURL}/posts/${id}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content,
        },
      }),
    });
    setContent('')

    const result = response.json();
    console.log(result);
  };

  return (
    <div>
      <h1>Hello from get</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h4>{post.author.username}</h4>
          <h3>{post.title}</h3>
          <div>{post.description}</div>
          <div>Price: {post.price}</div>
          <div>Location: {post.location}</div>
          <div>Delivery Available: {post.willDeliver ? "Yes" : "No"}</div>

          {myUserId === post.author._id ? (
            <button onClick={() => deletePost(post._id)}>Delete</button>
          ) : (
            <form key={post._id}>
              <input
                placeholder="Your message here"
                value={content}
                onChange={(event) => {
                  setContent(event.target.value);
                }}
                required
              ></input>
              <button onClick={() => addMessage(post._id, content)}>
                Message
              </button>
            </form>
          )}
        </div>
      ))}
    </div>
  );
};

export default Get;
