const dbConnection = require('../db/db-connection.js');
const dbName = 'qiMingInspiration';
const assert = require('assert');
module.exports = function (app) {
  app.get('/api/char/eval', eval);
  app.get('/test', test);
}

async function eval(req, res) {
  try {
    let connection = await dbConnection;
    let db = await connection.db(dbName);
    let r = await db.collection('characters').findOne();
    if (r) res.json(r)
    else res.status(410).send('All characters have been evaluated. Unbelievable!');
  }
  catch(error) {
    console.error(error);
  }
}

async function test(req, res) {
  try {
    let connection = await dbConnection;
    let db = await connection.db(dbName);
    // let r = await db.collection('characters').aggregate({ $sample: { size: 10 } }).toArray();
    let r = await db.collection('characters').aggregate([{$match: {tone: '3'}},{ $sample: { size: 10 } }]).toArray();
    if (r) res.json(r)
    else res.status(410).send('All characters have been evaluated. Unbelievable!');
  }
  catch(error) {
    console.error(error);
  }
}
