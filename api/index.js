const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use('/api',express.json());
app.use('/api',cors());

mongoose.connect(process.env.MONGODB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.error(err);
});

app.use('/api',routes);

module.exports = app;

