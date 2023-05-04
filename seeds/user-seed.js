const User = require('../models/users');

const userData = [
    {
        username: 'username1',
        email: 'email1@email.com',
        password: 'password1',
    },
    {
        username: 'username2',
        email: 'email2@email.com',
        password: 'password2'
    }
];

const seedUser = () => {
     User.bulkCreate(userData);
};

module.exports = seedUser;