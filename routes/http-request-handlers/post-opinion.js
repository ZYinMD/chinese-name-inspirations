// handle POST rated names to collection opinions

const db = require('../../db/db-connection.js');
const assert = require('assert');
module.exports = postOpinion;

async function postOpinion(req, res) {
  try {
    console.log('POST req.body: ', req.body);
    var collection = await db.opinions;
    let r = await collection.insertMany(req.body);
    assert.equal(req.body.length, r.insertedCount);
    res.status(200).end();
  }
  catch(error) {
    console.error(error);
  }
}
