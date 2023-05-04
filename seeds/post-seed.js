const Posts = require('../models/posts');


const postData = [
    {
        title: 'How to play guitar',
        content: 
        `
        Playing guitar involves several steps. Here is a summary of the basic process:
        Get a guitar - Acoustic or Electric.
        Learn the parts of the guitar, including the frets, strings, and tuning pegs.
        Tune your guitar so that it sounds good when you play it.
        Learn the basics of playing chords - which are combinations of notes played at the same time.
        Practice finger placement and build up strength in your fingers by regularly playing chords.
        Experiment with different chord progressions and learn to transition smoothly between chords.
        Learn strumming patterns, how to pick individual notes and create melodies.
        Practicing songs of different genres and difficulty levels will help improve musicianship.
        Record yourself playing, identify areas for improvement, and continue practicing to get better.
        With consistent practice over time, one can become proficient at playing guitar, ultimately leading to mastery.
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
        Create a Sequelize instance to connect to the database.
        Define models that represent tables in the database, including specifying their attributes and relationships to other models.
        Sync the models with the database by running migrations.
        Use Sequelize methods to perform CRUD (create, read, update, delete) operations on the models.
        Use Sequelize's query interface to run raw SQL queries or use its built-in methods to execute more complex queries such as aggregations and joins.
        Implement validations to ensure data consistency and integrity within the database.
        Incorporate hooks to execute certain functions during specific model lifecycle events, such as before creation or after deletion.
        Enforce associations between models using Sequelize's association methods to ensure referential integrity while retrieving related data across tables.
        Use Sequelize's transactional processing functionality to ensure atomicity and isolation while performing multiple related transactions at once.
        With Sequelize, you can effectively manage database tasks and make the process much smoother for developers.
        `,
        date_created: '3/5/2024',
        user_id: 2
    }
];


const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;