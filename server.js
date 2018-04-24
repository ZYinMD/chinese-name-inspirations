const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const dbConnection = require('./db/db-connection.js');
const dbName = 'qiMingInspiration';

app.use(bodyParser.urlencoded({ extended: true })); // if req url contains query string, this middleware parses that and stores in req.query
app.use(bodyParser.json()); // if req.body is in json, this middleware parses that into object
app.use(express.static("public-test"));
dbConnection.then(connection => {
  db = connection.db(dbName);
  require("./routes/api-routes.js")(app, db);
  require("./routes/html-routes.js")(app);
})
app.listen(PORT, () => console.log("App listening on PORT " + PORT));
