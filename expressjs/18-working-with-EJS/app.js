const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// set templating engine EJS
app.set('view engine', 'ejs');

// set template are in views files 
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
     // pass 404.pug
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
 });



const server = http.createServer(app);

server.listen(4000);