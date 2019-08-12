const express = require('express');
const app = express();
const Router = require('./routes')
const Config = require('./Config/Config')
const bodyParser = require('body-parser')
const expressSanitizer = require('express-sanitizer');
const database = require('./Config/database')



try {
  database.connectToDatabase(Config.database.host,
    Config.database.port,
    Config.database.type,
    Config.database.name,
    Config.database.userName,
    Config.database.password)

} catch (error) {
  console.log("Error in database connection:", error)
}


// sanitize the request
app.use(expressSanitizer());


// parse application/json
app.use(bodyParser.json({ extended: false }));

// allow cross origin
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



// Router
for (let [method, routes] of Object.entries(Router)) {
  for (let [url, requestHandler] of Object.entries(Router[method])) {
    app[method](url, requestHandler)
  }
}

// server up
app.listen(Config.port, () => {
  console.log("Server is on and listening on port ", Config.port);
});

module.exports = app