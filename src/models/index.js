const mongoose = require('mongoose');
const config = require('../core/config');
const logger = require('../core/logger')('app');

const usersSchema = require('./users-schema');
const commerseSchema = require('./commerse-schema');

mongoose.connect(`${config.database.connection}/${config.database.name}`, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
const User = mongoose.model('users', mongoose.Schema(usersSchema));
const Commerse = mongoose.model('commerse', mongoose.Schema(commerseSchema));

db.once('open', async () => {
  logger.info('Successfully connected to MongoDB');
});

module.exports = {
  mongoose,
  User,
  Commerse,
};
