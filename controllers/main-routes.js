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
            loggedIn: req.session.loggedIn
        });
        // res.send(posts);
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});

//GET Login: show login page if not logged in, else show dashboard.
router.get('/login',async (req, res) => {
    try {
        if(req.session.loggedIn){
            const user = await Users.findOne({
                where: {
                  id: req.session.userEmail,
                }
              });
            res.redirect('/dashboard');
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
        res.render('signup', {
            loggedIn: req.session.loggedIn
        });
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});
//GET dashboard: If logged in, show dashboard, else redirect to login
router.get('/dashboard', authCheck, async (req,res) => {
    try {
        var postsAvailable;
        const data = await Posts.findAll({
            where: {
                user_id: req.session.userId,
            },
            include: [Users]
          });
        const posts = data.map((post) => {
            return post.get({plain: true});
        });
        if(posts.length === 0){
            postsAvailable = false;
        } else {
            postsAvailable = true;
        };
        res.render('dashboard',{
            posts,
            loggedIn: req.session.loggedIn,
            postsAvailable: postsAvailable,
            script: 'js/dashboard.js'
        });
    } catch (error) {
        l.debug(error);
        console.log(error)
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