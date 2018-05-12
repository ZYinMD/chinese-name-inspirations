const path = require('path');
module.exports = function (app) {
    console.log('__dirname: ', (path.join(__dirname, '../client/build/index.html')));
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, './client/build/index.html'));
    });
};

