const router = require('express').Router();
const {Posts, Users, Comments} = require('../../models');
const authCheck = require('../../utils/authCheck');
const Logging = require('../../utils/logging');

const l = new Logging();

//DELETE for log out
router.delete('/', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy((err) => {
        if (err) {
            res.status(400).send('logout fail')
        } else {
            res.status(204).send('logout ok');
        }
        });
    } else {
      res.status(404).send({message: 'already logged out'});
    }
  });

  module.exports = router;