// adding middleware for process request and response

const http = require('http');
const express = require('express');

const app = express();

// adding middleware
app.use((req, res, next) => {
    console.log("in the 1st middleware");
    next();
})

app.use((req, res, next) => {
    console.log("in the 2nd middleware");
    res.send("<h1>hello from expressjs!</h1>")
})

const server = http.createServer(app);

server.listen(4000);