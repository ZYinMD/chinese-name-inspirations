const generateNames = require('./http-request-handlers/generate-names.js');
const retrieveOpinions = require('./http-request-handlers/retrieve-opinions.js');
const postOpinion = require('./http-request-handlers/post-opinion.js');

module.exports = function (app) {
  app.post('/api/names', postOpinion);
  app.get('/api/opinions/', retrieveOpinions);
  app.get('/api/names', generateNames);
};

