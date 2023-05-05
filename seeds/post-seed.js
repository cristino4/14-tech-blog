const Posts = require('../models/posts');


const postData = [
    {
        title: 'How to play guitar',
        content: 
        `Playing guitar`,
        date_created: '03/4/2024',
        user_id: 1
    },
    {
        title: 'How to use sequelize',
        content: 
        `Sequelize is an Object-Relational Mapping (ORM)`,
        date_created: '03/5/2024',
        user_id: 2
    }
];


const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;