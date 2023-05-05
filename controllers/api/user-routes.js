const router = require('express').Router();
const {Posts, Users, Comments} = require('../../models');
const authCheck = require('../../utils/authCheck');
const Logging = require('../../utils/logging');

const l = new Logging();

//GET: get users
router.get('/', authCheck, async (req,res) => {
    try {
        const data = await Users.findAll();
        const users = data.map((user) => user.get({plain: true}));
        res.status(200).json(users);
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
})


//POST: add new user
router.post('/', authCheck,async (req,res) =>{
    try {
        await Users.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        res.send(201);
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});

//PUT: update user
router.put('/:id', authCheck, async (req,res) => {
    try {
        await Users.update(req.body,
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

//DELETE: remove user 
router.delete('/:id', authCheck, async (req,res) => {
    try {
        await Users.destroy({
            where: {
                id: req.body.id
            }
        });
        res.send(200);
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
});

module.exports = router;