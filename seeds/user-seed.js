const User = require('../models/users');

const userData = [
    {
        username: 'username1',
        email: 'email1@email.com',
        password: 'password1',
        about_me: `Meet Jane, an experienced tech blogger. With over 10 years in the industry, she's become an expert in web development, cybersecurity and everything in between. Her blog, TechTalks, is a go-to source for the latest tech news and reviews, attracting readers from around the world. Jane's dedication to exploring new technologies and sharing her insights makes her an invaluable resource for anyone looking to embrace the digital age.`,
        first_name: 'Jane',
        last_name: 'Mock',
        country: 'Mexico',
        photo: 'her.jpg'
    },
    {
        username: 'username2',
        email: 'email2@email.com',
        password: 'password2',
        about_me: `Introducing John, a skilled and innovative engineer with a passion for creating technology that solves real-world problems. With over 15 years of experience in the industry, he's worked on projects ranging from cutting-edge software applications to infrastructure deployments. John's technical expertise and attention to detail make him a valuable asset to any team, and his ability to collaborate with cross-functional groups ensures successful project outcomes. Whether it's designing elegant solutions or troubleshooting complex issues, John is always up for a challenge and committed to delivering results that exceed expectations.`,
        first_name: 'John',
        last_name: 'Timbal',
        country: 'United States',
        photo: 'me.jpg'
    }
];

const seedUser = () => {
     User.bulkCreate(userData);
};

module.exports = seedUser;