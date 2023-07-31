const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const Product = new Schema({
    productName:{
        type:   String,
        required: true
    },
    productDescription:{
        type:   String,
        required: true
    },
    productPrice:{
        type:   Number,
        required: true
    },
    productQuantity:{
        type:   Number,
        required: true
    },
    productImage: String,
    userName:{
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = model('Product',Product);