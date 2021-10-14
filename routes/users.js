const express = require('express');
const jwt = require('jsonwebtoken')
const User = require('../models/users');

const router = express.Router();


router.post('/register',(req,res)=>{

    let newUser = new User(req.body);

    newUser.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            status:true,
            success:"Registration successful"
        });
    });
});

router.post('/login',async(req,res)=> {
    
        const user= await User.findOne({
            email:req.body.email,
            password: req.body.password,
        })
        
        if (user){

            const token =jwt.sign(
                {
                    name:user.name,
                    email:user.email,
                },'secret123'
            )
            return res.json({status:'ok',user:token,success:"Login successful!"})
        }else
        {
            return res.json({status:'error',user:false})
        }
})

module.exports = router;