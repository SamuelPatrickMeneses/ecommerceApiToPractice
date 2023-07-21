const app = require('./api/index.js');
const https = require('https');

https.createServer(app)
.listen(process.env.PORT || 3000,() => {
    console.log(`online! \nlistemport: 3000`);
});