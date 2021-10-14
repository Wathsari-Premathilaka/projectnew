const { Double } = require('bson');
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({//initialise a new schema

    name:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    telephone:{type:Number,required:true},
  
   
});

module.exports = mongoose.model('OrderRecords',OrderSchema)