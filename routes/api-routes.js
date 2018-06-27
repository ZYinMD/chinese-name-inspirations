const generateNames = require('./http-request-handlers/generate-names.js');
const retrieveOpinions = require('./http-request-handlers/retrieve-opinions.js');
const postOpinion = require('./http-request-handlers/post-opinion.js');
const postOnWall = require('./http-request-handlers/post-on-wall.js');
const retrieveWall = require('./http-request-handlers/retrieve-wall.js');

module.exports = function (app) {
  app.get('/api/opinions/', retrieveOpinions);
  app.get('/api/names', generateNames);
  app.post('/api/names', postOpinion);
  app.post('/api/wall', postOnWall);
  app.get('/api/wall', retrieveWall);
};

