const { Double } = require('bson');
const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({//initialise a new schema

    name:{type:String,required:true},
    price:{type:String,required:true},
    amount:{type:String,required:true},
   
});

module.exports = mongoose.model('Cart',CartSchema)