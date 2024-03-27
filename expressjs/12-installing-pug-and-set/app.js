const http = require('http');
const express = require('express');
const path = require('path');
const viewPath = require('./utils/path')
const bodyParser = require('body-parser');

const app = express();
// set templating engine PUG
app.set('view engine', 'pug');
// set views files 
app.set('views', 'views');


const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


// this is for capturing form body what data we send through body
app.use(bodyParser.urlencoded({extended: false}));

//this is allowed to access of public folder from anywhere in mainfolder
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use('/admin', adminData.routes);

app.use((req, res, next)=>{    
    res.status(404).sendFile(viewPath('page-notFound.html'));
 });



const server = http.createServer(app);

server.listen(4000);