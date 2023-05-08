const router = require('express').Router();
const {Posts, Users, Comments} = require('../../models');
const authCheck = require('../../utils/authCheck');
const Logging = require('../../utils/logging');

const l = new Logging();

//POST for login
router.post('/', async (req, res) => {
    try {
        if(req.session.loggedIn && req.session.userEmail){
            res.render('dashboard');
        } else {
            //find the user
            const user = await Users.findOne({
                where: {
                    email: req.body.email
                }
            });
            if(user){
                //check the password
                if(req.body.password === user.password){
                    //pasword ok
                    req.session.userId = user.id;
                    req.session.userEmail = user.email
                    req.session.loggedIn = true;
                    res.redirect('/dashboard');
                } else {
                    //password bad
                    res.status(401).send({message: 'incorrect password'})
                };
            } else {
                res.status(400).send({message: 'no account found'});
            };
        };
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});

module.exports = router;