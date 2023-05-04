const router = require('express').Router();
const {Posts, Users, Comments} = require('../models');
const Logger = 


router.get('/', async (req, res) =>{
    const postData = await Posts.findAll();
    const posts = postData.map((posts) => {
        return posts.get({plain: true});
    });
    res.render('homepage',{
        posts
    });
});