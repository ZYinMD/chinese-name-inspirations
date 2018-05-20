const constructNames = require('./http-request-handlers.js').constructNames;
const getNames = require('./http-request-handlers.js').getNames;

module.exports = function (app) {
  app.get('/api/names', async (req, res) => {
    console.log(req.query);
    try {
      var 现成names = await getNames([], 10);
      res.json(现成names);
      // var constructedNames = await constructNames([], 26, 3, 1);
      // res.json(constructedNames);

    }
    catch(error) {
      console.error(error);
    }
  });
};

