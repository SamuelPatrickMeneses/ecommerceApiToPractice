const express = require('express');
const useRoute = require('./UserRouters.js');
const productRoute = require('./ProductRouters.js');
const route = express.Router();

route.use('/users',useRoute);
route.use('/products',productRoute);

module.exports =  route;