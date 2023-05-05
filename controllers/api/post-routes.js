const router = require('express').Router();
const {Posts, Users, Comments} = require('../../models');
const authCheck = require('../../utils/authCheck');
const Logging = require('../../utils/logging');
const dayjs = require('dayjs');

const l = new Logging();


//GET posts

router.get('/', authCheck, async (req,res) => {
    try {
        const data = await Posts.findAll();
        const posts = data.map((post) => post.get({plain: true}));
        res.status(200).json(posts);
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
})
//POST create new post
router.post('/', authCheck, async (req,res) => {
    try {
        const date = dayjs();
        await Posts.create(
            {
                title: req.body.title,
                content: req.body.content,
                date_created: date.format('MM/DD/YYYY'),
                user_id: req.body.user_id
            });
        res.send(201);
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});

//PUT update post
router.put('/:id', authCheck, async (req,res) => {
    try {
        await Posts.update(req.body,
            {
                where:{
                    id: req.params.id
                }
            });
        res.send(201);
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});

//DELETE delete post
router.delete('/:id', authCheck, async (req,res) => {
    try {
        await Posts.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send(200);
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});

module.exports = router;
