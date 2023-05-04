const Comments = require('../models/comments');

const commentData = [
    {
        content: 'This is a great tutorial!',
        data_posted: '3/7/2024',
        post_id: 1,
        user_id: 1
    },
    {
        content: 'This tutorial sucks!',
        data_posted: '3/9/2024',
        post_id: 2,
        user_id: 2
    },
];


const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;