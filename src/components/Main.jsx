import React, { useEffect, useState } from "react";

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/posts"
      );
      const data = await response.json();
      console.log("checking: ", data);
      setPosts(data.data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Hello from main</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <div>{post.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Main;
