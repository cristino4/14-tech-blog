const sequelize = require('../config/connection');
const seedComments = require('./comment-seed');
const seedPosts = require('./post-seed');
const seedUser = require('./user-seed');
const l = require('../utils/logging')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedComments();
  l.debug('test comments seeded');
  await seedPosts();
  l.debug('test posts seeded');
  await seedUser();
  l.debug('test users seeded');
  process.exit(0);
};

seedAll();
      