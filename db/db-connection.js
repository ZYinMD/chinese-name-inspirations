const MongoClient = require("mongodb").MongoClient;
const URI = require("./db-uri").GETdbURI();

const connect = async function () {
  var connect = await MongoClient.connect(URI);
  return connect;
};

const namesCollection = async function () {
  var connection = await connect();
  return await connection.db().collection("names");
};

const charsCollection = async function () {
  var connection = await connect();
  return await connection.db().collection("characters");
};

const opinionsCollection = async function () {
  var connection = await connect();
  return await connection.db().collection("opinions");
};

const wallCollection = async function () {
  var connection = await connect();
  return await connection.db().collection("wall");
};

module.exports = {
  names: namesCollection(),
  chars: charsCollection(),
  opinions: opinionsCollection(),
  wall: wallCollection(),
};
