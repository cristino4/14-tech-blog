const router = require('express').Router();
const {Posts, Users, Comments} = require('../../models');
const authCheck = require('../../utils/authCheck');
const Logging = require('../../utils/logging');

const l = new Logging();

//POST create comment
router.post('/comment', authCheck, (req,res) => {
    try {
        
    } catch (error) {
        l.debug(error);
        res.status(500);
    }
});

//PUT update comment
router.put('/comment', authCheck, (req,res) => {
    try {
        
    } catch (error) {
        l.debug(error);
        res.status(500);
    }
});

//DELETE delete comment
router.delete('/comment', authCheck, (req,res) => {
    try {
        
    } catch (error) {
        l.debug(error);
        res.status(500);
    }
});
