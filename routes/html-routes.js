const path = require('path');
module.exports = function (app) {
    app.get('/', (req, res) => {
      res.sendFile('client/build/index.html' , { root : __dirname});
    });
};

