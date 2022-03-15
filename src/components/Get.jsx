import React, { useEffect, useState } from "react";
import { baseURL } from "../api";

const Get = ({ token }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
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

    // const result = await response.json();
    // console.log(response);
    // console.log("Result: ", result);
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
          <div>Delivery Available: {post.willDeliver ? "Yes" : "No"}</div>
          <button onClick={() => deletePost(post._id)}>Delete</button>
          {/* {post.isAuthor ? (
            <button onClick={() => deletePost(post._id)}>Delete</button>
          ) : null} */}
        </div>
      ))}
    </div>
  );
};

export default Get;
