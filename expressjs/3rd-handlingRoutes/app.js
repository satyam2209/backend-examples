// Handling different routes

const http = require('http');
const express = require('express');

const app = express();

// adding middleware
app.use("/", (req, res, next) => {
    console.log("in the root middleware");
    next();
})

// these all routes always in between
app.use("/hie", (req, res, next) => {
    console.log("in the 1st middleware");
    res.send("<h1>its hie expressjs</h1>");
})

app.use("/con", (req, res, next) => {
    console.log("in the 3rd middleware");
    res.send("<h1>contact us</h1>");
})

// this default root always in last 
app.use("/", (req, res, next) => {
    console.log("in the 2nd middleware");
    res.send("<h1>expressjs</h1>");
})



const server = http.createServer(app);

server.listen(4000);