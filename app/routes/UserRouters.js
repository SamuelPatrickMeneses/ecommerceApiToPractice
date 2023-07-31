const express = require('express');
const {getUsers, getUserById, postUser} = require('../controllers/UserControllers.js');

const route = express.Router();

route.get('/',getUsers);
route.get('/:user_id',getUserById);
route.post('/',postUser);

module.exports = route;