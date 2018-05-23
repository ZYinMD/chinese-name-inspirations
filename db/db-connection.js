const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_URI ? 'heroku_tp1ql3d8' : 'chinese-name-generator';

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

