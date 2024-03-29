const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Node JS Response</title></head>");
        res.write(
          "<body><form action='/message' method='POST'><input type='text' name='myMessage'/><button type='submit'>Submit</button></form></body>"
        );
        res.write("</html>");
        return res.end();
      }
      if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
          console.log(chunk);
          body.push(chunk);
        });
    
        return req.on("end", () => {
          const parseBody = Buffer.concat(body).toString();
          console.log(parseBody);
          const message = parseBody.split("=")[1];
          fs.writeFile("myMsg.txt", message, (err) => {
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
          });
        });
      }
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Node JS Response</title></head>");
      res.write("<body><h1>Hello from Node JS!</h1></body>");
      res.write("</html>");
      res.end();

}

// module.exports = requestHandler;

// alternate way for exports in nodejs

module.exports = {
  handler : requestHandler,
}

// module.exports.handler = requestHandler;

// exports.handler = requestHandler;
