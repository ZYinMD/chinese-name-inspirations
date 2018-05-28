const constructNames = require('./http-request-handlers.js').constructNames;
const getNames = require('./http-request-handlers.js').getNames;
const mixArray = require('./http-request-handlers.js').mixArray;
const getOpinions = require('./http-request-handlers.js').getOpinions;
const assert = require('assert');
const db = require('../db/db-connection.js');


module.exports = function (app) {

  app.post('/api/names', async (req, res) => {
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
  });

  app.get('/api/names', async (req, res) => {
    console.log('GET req.query: ', req.query);
    try {
      var 现成names = await getNames(req.query.allowed, 10);
      res.json(现成names);
      // var constructedNames = await constructNames([], 26, 3, 1);
      // res.json(constructedNames);
    }
    catch(error) {
      console.error(error);
    }
  });

  app.get('/api/opinions/', getOpinions);
};

