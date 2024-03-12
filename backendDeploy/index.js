// import express from "express"
require("dotenv").config();
// alternate way
const express = require("express");
const app = express();
// const port = 4000;

const githubData = {
  login: "satyam2209",
  id: 96168882,
  node_id: "U_kgDOBbtrsg",
  avatar_url: "https://avatars.githubusercontent.com/u/96168882?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/satyam2209",
  html_url: "https://github.com/satyam2209",
  followers_url: "https://api.github.com/users/satyam2209/followers",
  following_url:
    "https://api.github.com/users/satyam2209/following{/other_user}",
  gists_url: "https://api.github.com/users/satyam2209/gists{/gist_id}",
  starred_url: "https://api.github.com/users/satyam2209/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/satyam2209/subscriptions",
  organizations_url: "https://api.github.com/users/satyam2209/orgs",
  repos_url: "https://api.github.com/users/satyam2209/repos",
  events_url: "https://api.github.com/users/satyam2209/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/satyam2209/received_events",
  type: "User",
  site_admin: false,
  name: "Satyam Singh",
  company: "Acadian Technologies Pvt Ltd",
  blog: "",
  location: "Noida, UP",
  email: null,
  hireable: null,
  bio: "Frontend Developer @VSPAGY | MERN Stack ",
  twitter_username: null,
  public_repos: 7,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-12-15T07:27:04Z",
  updated_at: "2024-03-10T17:59:49Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.get("/login", (req, res) => {
  res.send("<h2>login page</h2>");
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// by environment variable
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

// notes

// when we something changes in this file then we re-run
// to avoiding this re-run whenever we changes in file this term known hot reloading

// for production ready application we secure private variables through env file
// as like in this application we access PORT through .env file
// and we not shown .env (environment variable) file in github or publicly
