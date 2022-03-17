import React, { useEffect, useState } from "react";
import { baseURL, addMessage, deletePost } from "../api";
import Msg from "./Msg";

const Get = ({ token, posts, setPosts, myUser, setMyUser }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(posts);
  const [addMsg, setAddMsg] = useState({
    makeMsg: true,
    idx: -1,
  });

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

  const handleMsgBtn = (e) => {
    if (addMsg.idx !== e.target.id) {
      setAddMsg({ makeMsg: true, idx: e.target.id });
      // console.log("state handleMsg: ", addMsg);
      // console.log("button: ", e.target.id);
    }
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

          {!myUser._id ? null : myUser._id === post.author._id ? (
            <button onClick={() => deleteClick(post._id, token)}>Delete</button>
          ) : addMsg.makeMsg ? (
            idx == addMsg.idx ? (
              <Msg post={post} idx={idx} setAddMsg={setAddMsg} token={token} />
            ) : (
              <button id={idx} onClick={handleMsgBtn}>
                Send Message
              </button>
            )
          ) : (
            <button id={idx} onClick={handleMsgBtn}>
              Send Message
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Get;
