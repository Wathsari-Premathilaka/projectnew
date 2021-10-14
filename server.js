const express = require('express');
const mongoose = require('mongoose')//locate this file node_modules/whatwg-url/dist/encoding.js add this line at top const { TextEncoder, TextDecoder } = require("util");
const bodyParser = require('body-parser');
//const cors =  require('cors');
const cors=require("cors");
const app = express()//invoke express
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));



const itemRoutes = require('./routes/items');
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart')


//app.use(bodyParser.json());
app.use(express.json());
app.use(itemRoutes);
app.use(userRoutes);
app.use(cartRoutes);

app.use(cors(corsOptions));





const PORT = 1700;



mongoose.connect('mongodb://localhost:27017/Inventory')
.then(()=> {
    console.log("DB connected");
})
.catch((err)=>console.log('DB connection error',err));


app.listen(PORT,()=>{
    console.log('Server is running on',PORT);
});