const express = require('express');
const {postProduct, getProductsByUserId, patchProduct, deleteProduct, getProducts, getProductById} =
 require('../controllers/ProductControllers.js');

const route = express.Router();

route.post('/:user_id',postProduct);
route.get('/:user_id',getProductsByUserId);
route.patch('/:user_id/:product_id',patchProduct);
route.delete('/:user_id/:product_id',deleteProduct);
route.get('/',getProducts);
route.get('/:product_id',getProductById);

module.exports = route;