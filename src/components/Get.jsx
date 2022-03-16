import React, { useEffect, useState } from "react";
import { baseURL } from "../api";

const Get = ({ token, myUserId, posts, setPosts }) => {
  const [content, setContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(posts);

  // const fetchPosts = async () => {
  //   const response = await fetch(`${baseURL}/posts`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   const data = await response.json();
  //   setPosts(data.data.posts);
  //   console.log(data.data.posts);
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  // deleteClick not finished
  const deleteClick = async (id) => {
    await deletePost(id);
    setPosts(...posts);
  };

  const deletePost = async (id) => {
    const response = await fetch(`${baseURL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // doesn't render automatically yet
    const result = await response.json();
    console.log("Result: ", result);
    return result;
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
    setContent("");

    const result = response.json();
    console.log(result);
    // return result;
  };

  const filterPosts = (posts, searchTerm) => {
    const searchFilter = [];

    posts.forEach((post) => {
      if (post.description.includes(searchTerm)) {
        searchFilter.push(post);
      }
    });
    console.log(searchResults);
    setSearchResults(searchFilter);
    // posts.filter(function (name) {
    //   return name.match(searchTerm);
    // });

    // const searchResults = posts.filter(
    //   posts.map((post) => {
    //     post.title.includes(searchTerm);
    //   })
    // );
  };

  console.log(posts);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          filterPosts(posts, searchTerm);
        }}
      >
        <input
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          // required
        ></input>
        <button type="submit">Search</button>
      </form>

      {/* <h1>Testing Search:</h1>
      {searchResults.map((post) => (
        <div key={post._id}>
          <h4>{post.author.username}</h4>
          <h3>{post.title}</h3>
          <div>{post.description}</div>
          <div>Price: {post.price}</div>
          <div>Location: {post.location}</div>
          <div>Delivery Available: {post.willDeliver ? "Yes" : "No"}</div>
        </div>
      ))} */}

      {/* comment */}
      <h1>Hello from get</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <div>{post.description}</div>
          <div>Price: {post.price}</div>
          <div>Location: {post.location}</div>
          <div>Delivery Available: {post.willDeliver ? "Yes" : "No"}</div>

          {/* {myUserId === post.author._id ? (
            <button onClick={() => deletePost(post._id)}>Delete</button>
          ) : (
            <form
              key={post._id}
              onSubmit={async (e) => {
                e.preventDefault();
                const result = await addMessage(post._id, content);
                console.log(result);
              }}
            >
              <input
                placeholder="Your message here"
                value={content}
                onChange={(event) => {
                  setContent(event.target.value);
                }}
                required
              ></input>
              <button type="submit">Message</button>
            </form>
          )} */}
        </div>
      ))}
      {/* comment */}
    </div>
  );
};

export default Get;
