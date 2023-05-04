const Comment = require('./comments');
const Post =  require('./posts');
const User = require('./users');

User.hasMany(Comment);
User.hasMany(Post);

Post.belongsTo(User);
Comment.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = {
    Comment,
    Post,
    User
};