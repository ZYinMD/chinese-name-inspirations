const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true })); // if req url contains query string, this middleware parses that and stores in req.query
app.use(bodyParser.json()); // if req.body is in json, this middleware parses that into object
app.use(express.static('client/build'));
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

app.listen(PORT, () => console.log('App listening on PORT ' + PORT));
