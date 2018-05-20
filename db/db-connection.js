// this file exports a promise which resolves on the connection with the db, see index.js
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'chinese-name-generator';
// module.exports = MongoClient.connect(url + '/' + dbName);
const connect = async function() {
  var connect = await MongoClient.connect(url + '/' + dbName);
  return connect;
};

const namesCollection = async function() {
  var connection = await connect();
  return await connection.db().collection('names');
};

const charsCollection = async function() {
  var connection = await connect();
  return await connection.db().collection('characters');
};

module.exports = {
  names: namesCollection(),
  chars: charsCollection()
};

