const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const Cart = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: {
        type: String,
        default: ''
    },
    creationdate: {
        type: Number,
        default: Date.now
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

module.exports = model('Cart', Cart);