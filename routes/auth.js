const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');
const Users = require('../model/user-model');
const app = express()

router.post('/signin/password', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin'
}))

passport.use(new LocalStrategy((email, password, done)=>{
    Users.findOne({"email": email}, (err, user)=>{
        if(err) {return done(err);}
        if(!user) {return done(null, false)}
        if(!user.verifyPassword(password)) {return done(null, false);}
        return done(null, user);
    });
}))

module.exports = router;