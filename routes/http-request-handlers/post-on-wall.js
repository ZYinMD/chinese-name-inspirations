// handle POST messages on the wall

const db = require('../../db/db-connection.js');
const assert = require('assert');
module.exports = postOnWall;

async function postOnWall(req, res) {
  try {
    var collection = await db.wall;
    let r = await collection.insertOne(req.body);
    assert.equal(1, r.insertedCount);
    res.json(req.body);
  }
  catch(error) {
    console.error(error);
  }
}
