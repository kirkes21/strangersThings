import React, { useEffect, useState } from "react";
import { baseURL, addMessage, deletePost } from "../api";

const Get = ({ token, posts, setPosts, myUser, setMyUser }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(posts);

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

  const deleteClick = async (deleteId, token) => {
    const result = await deletePost(token, deleteId);

    const newPosts = [];

    posts.forEach((post) => {
      if (post._id !== deleteId) {
        newPosts.push(post);
      }
    });

    setPosts(newPosts);
  };

  useEffect(() => {
    filterPosts(posts, searchTerm);
  }, [posts]);

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

      {myUser.username ? <h1>Welcome, {myUser.username}</h1> : null}
      {searchResults.map((post, idx) => (
        <div key={post._id}>
          <h4>{post.author.username}</h4>
          <h3>{post.title}</h3>
          <div>{post.description}</div>
          <div>Price: {post.price}</div>
          <div>Location: {post.location}</div>
          <div>Delivery Available: {post.willDeliver ? "Yes" : "No"}</div>

          {
            !myUser._id ? null : myUser._id === post.author._id ? (
              <button onClick={() => deleteClick(post._id, token)}>
                Delete
              </button>
            ) : (
              <Msg post={post} idx={idx} />
            )
            // <form
            //   key={post._id}
            //   onSubmit={async (e) => {
            //     e.preventDefault();
            //     const result = await addMessage(token, post._id, content);
            //     setContent("");

            //     // console.log(result);
            //     // setMyUser({ ...myUser, messages: [...messages, content] });
            //     // console.log(myUser.messages);
            //   }}
            // >
            //   <input
            //     placeholder="Your message here"
            //     key={`message: ${idx}`}
            //     value={content}
            //     onChange={(event) => {
            //       setContent(event.target.value);
            //     }}
            //     required
            //   ></input>
            //   <button type="submit">Message</button>
            // </form>
          }
        </div>
      ))}
    </div>
  );
};

export default Get;
