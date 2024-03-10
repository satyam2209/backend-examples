const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.method, req.headers, req.url);
});

server.listen(3000);