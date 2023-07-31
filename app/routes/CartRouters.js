const {postCart, getCartsByUserId, getCartById} = require('../controllers/CartControllers.js');
const express = require('express');

const route = express.Router();

route.post('/:user_id', postCart);
route.get('/:user_id', getCartsByUserId);
route.get('/:user_id/:cart_id', getCartById);

module.exports = route;
