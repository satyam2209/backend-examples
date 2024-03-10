const http = require("http");
const fs = require('fs');
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write("<html>");
    res.write("<head><title>Node JS Response</title></head>");
    res.write("<body><form action='/message' method='POST'><input type='text' name='myMessage'/><button type='submit'>Submit</button></form></body>");
    res.write("</html>");
    return res.end();
  }
  if(url === '/message' && method === 'POST'){
    fs.writeFileSync('myMsg.txt', 'My Test Data');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Node JS Response</title></head>');
  res.write('<body><h1>Hello from Node JS!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(8080);