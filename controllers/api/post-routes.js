const router = require('express').Router();
const {Posts, Users, Comments} = require('../../models');
const authCheck = require('../../utils/authCheck');
const Logging = require('../../utils/logging');

const l = new Logging();

//POST create new post
router.post('/post', authCheck, (req,res) => {
    try {
        
    } catch (error) {
        l.debug(error);
        res.status(500);
    }
});

//PUT update post
router.put('/post', authCheck, (req,res) => {
    try {
        
    } catch (error) {
        l.debug(error);
        res.status(500);
    }
});

//DELETE delete post
router.delete('/post', authCheck, (req,res) => {
    try {
        
    } catch (error) {
        l.debug(error);
        res.status(500);
    }
});