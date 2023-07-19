//const https = require('https');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
app.use('/api',express.json());
app.use('/api',cors());
console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then((data) => {
    console.log('conectad!');
}).catch((err) => {
    console.log(err);
});

app.get('/api',(req,res) =>{
    res.contentType('text/plain');
    res.send('hola mundo!');
})
module.exports = app;
// https.createServer(app)
// .listen(3000,() => {
//     console.log(`online! \nlistemport: 3000`);
// });

