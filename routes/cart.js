const express = require('express');
const CartItems = require('../models/cart');
const OrderRecords= require('../models/orderdetails');



const router = express.Router();

//add items to cart

router.post('/addcart',(req,res)=>{

    let cartItem = new CartItems(req.body);

    cartItem.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Item added to cart successfully"
        });
    });
});



//get items in the cart
router.get('/getcart',(req,res)=>{
    CartItems.find().exec((err,i) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            exixtingcartitems:i
        });
    });
});


//order item
router.post('/order',(req,res)=>{

    let orderItem = new OrderRecords(req.body);

    orderItem.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:" successfully  orderd"
        });
    });
});


router.get('/getorder',(req,res)=>{
    OrderRecords.find().sort({_id:-1}).limit(1).exec((err,i) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            exixtingorder:i
        });
    });
});
module.exports = router;