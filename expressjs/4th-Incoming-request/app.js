// parsing incoming requests

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// this is for form body what data we send through body
app.use(bodyParser.urlencoded({extended: false}));



app.use("/contact", (req, res, next) => {
  
    res.send("<h1>contact us</h1>");
})

app.use('/add-users', (req, res, next)=>{
    res.send('<form action="/users" method="POST"><input type="text" name="title"/><button type="submit">Send</button></form>');
})

// install body-parser for read incoming data other the console shows undefined
//only get and post work with normal html
app.post("/users", (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})


app.use("/", (req, res, next) => {
    res.send("<h1>expressjs</h1>");
})



const server = http.createServer(app);

server.listen(4000);