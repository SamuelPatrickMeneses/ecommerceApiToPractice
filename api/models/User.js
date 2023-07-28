const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const User = new Schema({
    userName:{
        type: String,
        required:true
    },
    userCarts:  [{
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    }],
    address: {
        street: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state:  {
            type: String,
            required: true
        }
    },
    payment: {
        card: String,
        cvc: String
    }
});

module.exports = model('User',User);