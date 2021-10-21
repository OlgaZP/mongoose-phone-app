const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const env = process.env.NODE_ENV ?? 'development';
const config = require('./../config/db')[env];

mongoose
  .connect(`mongodb://${config.host}:${config.port}/${config.dbName}`)
  .then(data => console.log(`Connection to DB OK!`))
  .catch(err => console.log(`err`, err));

module.exports.Phone = require('./phone');
