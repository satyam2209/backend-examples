// firstly this gives error beacause it treated as common js
// but we want to treated this as module and for this we changes in package.json by adding
// "type": "module", then it will work correctly
// other for common js we add it as const express = require("express");
import express from "express";
const app = express();

// app.use(express.static('build-folder-name'))   
// make build of my react app and use name of the folder and paste those folder in my backend main folder
// and make build then use cra command "npm run build" and whenever new changes in frontend then make new build and paste new build folder
// but this upper case is bad practice but uses is most of the company


//if process.env.PORT is not defined then it will take 4000 in local machine
//but in production it will take process.env.PORT otherwise the app is not running
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("server is ready");
});

// app.get("/jokes", (req, res) => {
  // directly writing /jokes is not a best practice always use best practice like /api/jokes or more
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke1",
      content: "joke1 content",
    },
    {
      id: 2,
      title: "joke2",
      content: "joke2 content",
    },
    {
      id: 3,
      title: "joke3",
      content: "joke3 content",
    },
    {
      id: 4,
      title: "joke4",
      content: "joke4 content",
    },
    {
      id: 5,
      title: "joke5",
      content: "joke5 content",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

// in backend run commands
// npm init
// npm i express
