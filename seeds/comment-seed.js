const Comments = require('../models/comments');

const commentData = [
    {
        content: 'This is a great tutorial!',
        date_posted: '03/7/2024',
        post_id: 1,
        user_id: 1
    },
    {
        content: 'This tutorial sucks!',
        date_posted: '03/9/2024',
        post_id: 2,
        user_id: 2
    },
];


const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;