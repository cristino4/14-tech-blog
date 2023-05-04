const sequelize = require('../config/connection');
const seedComments = require('./comment-seed');
const seedPosts = require('./post-seed');
const seedUser = require('./user-seed');
const Logging = require('../utils/logging')

const l = new Logging()

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  l.debug('test users seeded');
  await seedPosts();
  l.debug('test posts seeded');
  await seedComments();
  l.debug('test comments seeded');
  process.exit(0);
};

seedAll();
      