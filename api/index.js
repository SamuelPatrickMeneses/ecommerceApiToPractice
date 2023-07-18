

const https = require('https');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
app.use('/api',express.json());
app.use('/api',cors());

mongoose.connect(process.env.MONGODB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
},() => console.log('mongoose conected!'));

app.get('/api',(req,res) =>{
    res.contentType('text/plain');
    res.send('hola mundo!');
})
module.exports = app;
// https.createServer(app)
// .listen(PORT,() => {
//     console.log(`online! \nlistemport: ${PORT}`);
// });

