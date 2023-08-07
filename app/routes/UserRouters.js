const express = require('express');
const basicAuth = require('../midlewares/basicAuth.js')
const {getUsers, getUserById, postUser} = require('../controllers/UserControllers.js');

const route = express.Router();

route.use(basicAuth);

route.get('/',getUsers);
route.get('/:user_id',getUserById);
route.post('/',postUser);

module.exports = route;