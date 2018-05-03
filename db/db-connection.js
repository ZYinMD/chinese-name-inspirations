// this file exports a promise which resolves on the connection with the db, see index.js
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'qiMingInspiration';
module.exports = MongoClient.connect(url + '/' + dbName);
