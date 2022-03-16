import React, { useEffect, useState } from "react";

export const baseURL =
  "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft";

export const registerUser = async (username, password) => {
  const response = await fetch(`${baseURL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await response.json();
  return data;
};

export const loginUser = async (username, password) => {
  const response = await fetch(`${baseURL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await response.json();
  return data;
};

export const myUserInfo = async (token) => {
  const response = await fetch(`${baseURL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export const fetchPosts = async (token) => {
  const response = await fetch(`${baseURL}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log('fetchPosts: ', data.data.posts)
  return data.data.posts
};

export const addPost = async (token, formState) => {
  const response = await fetch(`${baseURL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: formState.title,
        description: formState.description,
        price: formState.price,
        location: formState.location,
        willDeliver: formState.willDeliver,
      },
    }),
  });
  const result = await response.json()
  return result
}