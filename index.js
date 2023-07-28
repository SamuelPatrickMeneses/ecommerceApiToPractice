const app = require('./api/index.js');
const http = require('http');

http.createServer(app)
.listen(process.env.PORT || 3000,() => {
    console.log(`online! \nlistemport: 3000`);
});