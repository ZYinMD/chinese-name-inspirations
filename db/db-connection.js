const MongoClient = require('mongodb').MongoClient;
const localDBName='chinese-name-generator';
const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/' + localDBName;

const connect = async function() {
  var connect = await MongoClient.connect(URI);
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

