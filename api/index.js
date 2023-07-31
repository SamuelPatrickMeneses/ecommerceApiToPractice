const express = require('express');
const cors = require('cors');
const routes = require('../app/routes');
require('../app/config/DBConection.js'); 

const app = express();
app.use('/api',express.json());
app.use('/api',cors());

app.use('/api',routes);

module.exports = app;

