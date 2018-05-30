// This file is no longer needed.
// It contains the routes that were used when I evaluated each characters.

const dbConnection = require('../db/db-connection.js');
module.exports = function (app) {
  app.get('/api/char/eval', evaluate);
  app.post('/api/char', updateChar);
  app.get('/test', test);
};

async function evaluate(req, res) {
  try {
    let connection = await dbConnection;
    let collection = await connection.db().collection('characters');
    let r = await collection.aggregate([{$match: {evaluated: false}}, {$sample: {size: 3}}]).toArray();
    if (r) res.json(r);
    else res.status(410).send('All characters have been evaluated. Unbelievable!');
  }
  catch(error) {
    console.error(error);
  }
}

async function updateChar(req, res) {
  try {
    // res.json({'This was the req.body you sent': req.body})
    let connection = await dbConnection;
    let collection = await connection.db().collection('characters');
    let r = await collection.updateOne({_id: req.body._id}, {$set: {evaluated: true, labels: req.body.labels}});
    assert.equal(1, r.matchedCount);
    // assert.equal(1, r.modifiedCount);
    res.status(200).send(`${req.body.char} updated`);

  }
  catch(error) {
    console.error(error);
  }
}
async function test(req, res) {
  try {
    let connection = await dbConnection;
    let db = await connection.db();
    // let r = await db.collection('characters').aggregate({ $sample: { size: 10 } }).toArray();
    let r = await db.collection('characters').aggregate([{$match: {tone: '3'}},{ $sample: { size: 10 } }]).toArray();
    if (r) res.json(r);
    else res.status(410).send('All characters have been evaluated. Unbelievable!');
  }
  catch(error) {
    console.error(error);
  }
}


