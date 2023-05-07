const router = require('express').Router();
const {Posts, Users, Comments} = require('../models');
const authCheck = require('../utils/authCheck');
const Logging = require('../utils/logging');

const l = new Logging();


//GET homepage. Display posts
router.get('/', async (req, res) =>{
    try {
        const postData = await Posts.findAll({
            include: [Users]
        });
        const posts = postData.map((posts) => {
            return posts.get({plain: true});
        });
        res.render('homepage',{
            posts,
        });
        // res.send(posts);
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});

//GET Pictures:
//GET Login: show login page if not logged in, else show dashboard.
router.get('/login', authCheck,async (req, res) => {
    try {
        req.session.loggedIn = false;
        if(req.session.loggedIn){
            const user = await Users.findOne({
                where: {
                  id: req.session.userId,
                }
              });
            res.render('dashboard',{
                user
            });
        } else{
            res.render('login');
        }
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});


//GET Sign Up: show login page if not logged in, else show dashboard.
router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});
//GET dashboard: If logged in, show dashboard, else redirect to login
router.get('/dashboard', authCheck, async (req,res) => {
    try {
        const user = await Users.findOne({
            where: {
              id: req.session.userId,
            }
          });
        res.render('dashboard',{
            user
        });
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});

//GET post: If logged in, show post with comments, else
//show only post with comments disabled
router.get('/post', (req,res) => {
    try {
        res.render('post',{
            loggedIn: req.session.loggedIn
        });
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});

module.exports = router;