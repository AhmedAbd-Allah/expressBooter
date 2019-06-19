const express = require('express');
const app = express();
const Router = require('./routes')
const Config = require('./Config')
const mongoose = require('mongoose');
const dbURI = process.env.MONGO_URI? process.env.MONGO_URI : Config.MONGO_URI;




// Start database connection
mongoose.connect(dbURI, { useNewUrlParser: true });

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
for(let [method,routes] of Object.entries(Router)){
  for (let [url, requestHandler] of Object.entries(Router[method])) {
    app[method](url, requestHandler)
  }
}


app.listen(Config.port, () => {
  console.log("Server is on and listening on port ", Config.port);
});

module.exports = app