const sequelize = require('../config/connection');
const seedComments = require('./comment-seed');
const seedPosts = require('./post-seed');
const seedUser = require('./user-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedComments();

  await seedPosts();

  await seedUser();

  process.exit(0);
};

seedAll();
