const express = require('express');
const useRoute = require('./UserRouters.js');

const route = express.Router();

route.use('/users',useRoute);

module.exports =  route;