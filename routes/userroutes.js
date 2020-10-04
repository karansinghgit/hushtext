const express = require('express');
const app = express();
const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const Users = require('../models/usermodel');
const {check,validationResult } = require('express-validator');

// middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.post('/createsite',[
    // check not empty fields
    check('sitename').not().isEmpty().trim().escape(),
    check('password').not().isEmpty().trim().escape(),
    ],
    function(req,res){
        //check validation errors
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                status:false,
                message:'Form validation error',
                errors:errors.array()
            })
        }
        // output data to user
        return res.json({
            status:true,
            message:'New site created',
            data:req.body
        });
    }
);


module.exports = router;