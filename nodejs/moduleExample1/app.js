const http = require('http');
const routes = require('./routes')

// const server = http.createServer(routes);
const server = http.createServer(routes.handler);

server.listen(3000);

// routes.js is not editable and changable at outer files , we only changes from routes.js we only access by exporting routes and use in createServer and not editable