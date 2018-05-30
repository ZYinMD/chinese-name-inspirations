const constructNames = require('./http-request-handlers.js').constructNames;
const getNames = require('./http-request-handlers.js').getNames;
const mixArray = require('./http-request-handlers.js').mixArray;
const retrieveOpinions = require('./http-request-handlers/retrieve-opinions.js');
const postOpinion = require('./http-request-handlers/post-opinion.js');
const assert = require('assert');
const db = require('../db/db-connection.js');


module.exports = function (app) {

  app.post('/api/names', postOpinion);

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

  app.get('/api/opinions/', retrieveOpinions);
};

