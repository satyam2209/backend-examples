const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


// this is for capturing form body what data we send through body
app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use((req, res, next)=>{
    // res.status(404).send('<h1>Page not found!</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-notFound.html'));
 });



const server = http.createServer(app);

server.listen(4000);