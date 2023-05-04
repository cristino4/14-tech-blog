const Posts = require('../models/posts');


const postData = [
    {
        title: 'How to play guitar',
        content: 
        `
        Playing guitar involves several steps. Here is a summary of the basic process:
        Get a guitar - Acoustic or Electric.
        `,
        date_created: '3/4/2024',
        user_id: 1
    },
    {
        title: 'How to use sequelize',
        content: 
        ` 
        Sequelize is an Object-Relational Mapping (ORM) library that simplifies working with relational databases in Node.js. Here is a summary of how to use Sequelize:
        Install Sequelize as a dependency in your Node.js project using npm.
        `,
        date_created: '3/5/2024',
        user_id: 2
    }
];


const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;