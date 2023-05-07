const router = require('express').Router();
const {Posts, Users, Comments} = require('../../models');
const authCheck = require('../../utils/authCheck');
const Logging = require('../../utils/logging');

const l = new Logging();

//GET: get users
router.get('/', authCheck, async (req,res) => {
    try {
        const data = await Users.findAll({
            include: [Posts]
        });
        const users = data.map((user) => user.get({plain: true}));
        res.status(200).json(users);
    } catch (error) {
        l.debug(error);
        res.status(500).send(error);
    }
})


//POST: add new user **signup**
router.post('/',async (req,res) =>{
    try {
        const newUser = await Users.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            about_me: req.body.about,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            country: req.body.country,
        });
        req.session.userId = newUser.id;
        req.session.userEmail = req.body.email;
        req.session.loggedIn = true;
        res.redirect('/dashboard');

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