const router = require('express').Router();
const {Posts, Users, Comments} = require('../../models');
const authCheck = require('../../utils/authCheck');
const Logging = require('../../utils/logging');

const l = new Logging();

//DELETE for log out
router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy((err) => {
        if (err) {
            res.status(400).send('logout fail')
        } else {
            res.redirect('/');
        }
        });
    } else {
      res.redirect('/');
    }
  });

  module.exports = router;