const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Load Input Validation
const ValidateRegisterInput = require('../validation/register');
const ValidateLoginInput = require('../validation/login');

// Load User model
const User = require('../models/User');
const { default: validator } = require('validator');

// @route GET api/users/test
// @desc Tests users route
// @access Public
router.get('/test', (req, res) => res.json({msg: "User works"}));

// @route GET api/users/register
// @desc Register new user
// @access Public
router.post('/register', (req, res) => {

    // Check Validation

    const { errors, isValid } = ValidateRegisterInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if(user){
            return res.status(400).json({email: 'Email already exists'});
        } else {

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                if (salt) {
                   bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) console.log(err);
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    }); 
                }
                else {
                    throw err;
                }
            });
        };
    })
})


// @route GET api/users/login
// @desc Login User / Returning JWT Token
// @access Public
router.post('/login', (req, res) => {

    const { errors, isValid } = ValidateLoginInput(req.body);


    // Check Validation
    
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email })
        .then(user => {
            //  Check for user
            if(!user) {
                errors.email = 'User not found';
                return res.status(404).json(errors);
            }

            //  Check Password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        // User Matched
                        // Create JWT payload

                        const payload = {
                            id: user.id,
                            name: user.name,
                        }; 

                        // Sign Token
                        jwt.sign(
                            payload, 
                            process.env.SECRET, 
                            { expiresIn : 3600 }, 
                            (err, token) => {
                                if (token) {
                                    res.json({
                                        success: true,
                                        token: 'Bearer ' + token
                                    })
                                }
                                else {
                                    throw err
                                }
                        });
                    } else {
                        errors.password = 'Password Incorrect'
                        return res.status(400).json({
                            password: 'Password incorrect'
                        })
                    }
                })
        })
})

// @route GET api/users/current
// @desc Return current user
// @access Private
router.get(
    '/current',
    passport.authenticate('jwt',{session : false}),
    (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    })}
);

module.exports = router;