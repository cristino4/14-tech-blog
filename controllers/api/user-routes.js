const router = require('express').Router();
const {Posts, Users, Comments} = require('../..models');
const authCheck = require('../../utils/authCheck');
const Logging = require('../../utils/logging');

const l = new Logging();

//POST: add new user
router.post('/user', (req,res) =>{
    try {
        
    } catch (error) {
        l.debug(error);
        res.status(500);
    }
});

//POST: update user
router.put('/user', authCheck, (req,res) => {
    try {
        
    } catch (error) {
        l.debug(error);
        res.status(500);
    }
});

//POST: remove user 
router.delete('/user', authCheck, (req,res) => {
    try {
        
    } catch (error) {
        l.debug(error);
        res.status(500);
    }
});