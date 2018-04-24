const assert = require('assert');
module.exports = function (app, db) {
  app.get('/api', test);
}

async function test(req, res) {
  try {
    let r = await db.collection('inserts').insertOne({aa:11});;
    assert.equal(1, r.insertedCount);
  }
  catch(error) {
    console.error(error);
  }
}


