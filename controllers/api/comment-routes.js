const router = require('express').Router();
const {Posts, Users, Comments} = require('../../models');
const authCheck = require('../../utils/authCheck');
const Logging = require('../../utils/logging');
const dayjs = require('dayjs');

const l = new Logging();

//GET comments
router.get('/', authCheck, async (req,res) => {
    try {
        const data = await Comments.findAll();
        const comments = data.map((comment) => comment.get({plain: true}));
        res.status(200).json(comments);
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
})

//POST create comment
router.post('/', authCheck, async (req,res) => {
    try {
        const date = dayjs();
        await Comments.create({
            content: req.body.content,
            date_posted: date.format('MM/DD/YYYY'),
            post_id: req.body.post_id,
            user_id: req.body,user_id
        });
        res.send(201);
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});

//PUT update comment
router.put('/:id', authCheck, async (req,res) => {
    try {
        await Comments.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.send(201);
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});

//DELETE delete comment
router.delete('/:id', authCheck, async (req,res) => {
    try {
        await Comments.destroy({
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
