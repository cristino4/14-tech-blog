const Comments = require('./comments');
const Posts =  require('./posts');
const Users = require('./users');

Users.hasMany(Comments)
Users.hasMany(Posts);

Posts.belongsTo(Users);
Comments.belongsTo(Users)

Posts.hasMany(Comments);
Comments.belongsTo(Posts);

module.exports = {
    Comments,
    Posts,
    Users
};