const mongoose = require('mongoose');

const MONGO_USERNAME = 'adrian';
const MONGO_PASSWORD = '123456';
const MONGO_HOSTNAME = 'localhost';
const MONGO_PORT = '3000';
const MONGO_DB = 'dashboardDB';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, {useNewUrlParser: true});
