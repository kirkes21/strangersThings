import React, { useEffect, useState } from "react";
import { baseURL } from "../api";

const Get = ({ token, posts, setPosts, myUser }) => {
  const [content, setContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(posts);

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
      if (
        post.author.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.location.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        searchFilter.push(post);
      }
    });
    setSearchResults(searchFilter);
  };

  const deletePost = async (deleteId) => {
    const response = await fetch(`${baseURL}/posts/${deleteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  };

  const deleteClick = async (deleteId, token) => {
    const result = await deletePost(deleteId, token);
    console.log(result);
    // setPosts(...posts);
    console.log("posts before filter", posts);

    // const deleteFilter = [];

    // posts.forEach((post) => {
    //   if (post._id !== deleteId) {
    //     deleteFilter.push(post);
    //   }
    // });
    // setPosts(deleteFilter)

    // setPosts(posts.filter(post => post._id !== deleteId));

    console.log("posts after filter", posts);
    // filterPosts(posts, searchTerm);
  };

  // console.log("current search results", searchResults);

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
        ></input>
        <button type="submit">Search</button>
      </form>

      {myUser.username ? <h1>Welcome, {myUser.username}</h1>: null}
      {searchResults.map((post) => (
        <div key={post._id}>
          <h4>{post.author.username}</h4>
          <h3>{post.title}</h3>
          <div>{post.description}</div>
          <div>Price: {post.price}</div>
          <div>Location: {post.location}</div>
          <div>Delivery Available: {post.willDeliver ? "Yes" : "No"}</div>

          {!myUser._id ? null: myUser._id === true && myUser._id === post.author._id ? (
            <button onClick={() => deleteClick(post._id, token)}>Delete</button>
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
          )}
        </div>
      ))}
    </div>
  );
};

export default Get;
