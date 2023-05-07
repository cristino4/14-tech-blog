const router = require('express').Router();

const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');
const loginRoutes = require('./login');
const logoutRoutes = require('./logout');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);



module.exports = router;
