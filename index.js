const express = require('express');
const app = express();
//const Config = require('./Config')
// const dbURI = process.env.MONGO_URI? process.env.MONGO_URI : 'mongodb://localhost:27017/zappy';
const router = require('./routes')

// Startup database connection
// const mongoose = require('mongoose');
//mongoose.connect(dbURI, { useNewUrlParser: true });

// allow cross origin
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

for (let [key, value] of Object.entries(router.get)) {
  app.get(key, value)
}
for (let [key, value] of Object.entries(router.post)) {
  app.post(key, value)
}
for (let [key, value] of Object.entries(router.put)) {
  app.put(key, value)
}
for (let [key, value] of Object.entries(router.delete)) {
  app.delete(key, value)
}

// app.get('/', twitterController.getTweets)



app.listen(3000, () => {
  console.log("Server is on and listening on port ", 3000);
});

module.exports = app