const PORT = process.env.port || 3000;
const https = require('https');
const express = require('express');
const app = express();


app.get('/',(req,res) =>{
    res.contentType('text/plain');
    res.send('hola mundo!');
})

https.createServer(app)
.listen(PORT,() => {
    console.log(`online! \nlistemport: ${PORT}`);
});

