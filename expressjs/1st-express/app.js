// 1st example to write routes

const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(4000);