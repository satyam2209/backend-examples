const http = require('http');
const express = require('express');
const path = require('path');
const viewPath = require('./utils/path')
const bodyParser = require('body-parser');
// import template engines express-handlebars
const expressHbs = require('express-handlebars');

const app = express();
// set express-handlebars
app.engine('hbs', expressHbs.engine({
    extname: 'hbs',
    defaultLayout: 'main-layout',
    layoutsDir: 'views/layouts',
}));
// no need to import pug because it is in-built with express.js
// set templating engine PUG
// app.set('view engine', 'pug');
// set templating engine PUG
app.set('view engine', 'hbs');

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
    // res.status(404).sendFile(viewPath('page-notFound.html'));
    // pass 404.pug
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
 });



const server = http.createServer(app);

server.listen(4000);