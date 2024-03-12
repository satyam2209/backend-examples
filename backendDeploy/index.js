// import express from "express"
require("dotenv").config();
// alternate way
const express = require("express");
const app = express();
// const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
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
