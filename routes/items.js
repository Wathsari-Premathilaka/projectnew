const express = require('express');
const Items = require('../models/items');


const router = express.Router();

//add items

router.post('/additem',(req,res)=>{

    let newItem = new Items(req.body);

    newItem.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Item add successfully"
        });
    });
});



//get items
router.get('/getitems',(req,res)=>{
    Items.find().exec((err,i) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            exixtingPosts:i
        });
    });
});

//get a specific item
router.get("/getitem/:id",(req,res)=>{
    let itemId = req.params.id;

    Items.findById(itemId,(err,item)=>{
        if(err){
            return res.status(400).json({success:false,err});

        }

        return res.status(200).json({
            success:true,
            item
        });
    });
});


//update items

router.put('/updateitem/:id',(req,res)=>{
    Items.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,item)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
            success:"Updated item successfully"
            });
        }
    );
});


router.delete('/deleteitem/:id',(req,res)=>{
    Items.findByIdAndRemove(req.params.id).exec((err,item)=>{
        if(err)
        return res.status(400).json({
            message:"Remove unscuessfull",err
        });

        return res.json({
            message:"Item has been removed successfully!",item
        });
    });
});
module.exports = router;