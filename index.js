const express = require('express');
const app = express();
const Config = require('./Config')
// const dbURI = process.env.MONGO_URI? process.env.MONGO_URI : 'mongodb://localhost:27017/zappy';
const router = require('./routes')

// Startup database connection
// const mongoose = require('mongoose');
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






app.listen(Config.port, () => {
  console.log("Server is on and listening on port ", Config.port);
});

module.exports = app