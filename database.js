const mongoose = require('mongoose');
var colors = require('colors');

mongoose.connect(process.env.DPASS,
 {
      useNewUrlParser: true,
      useUnifiedTopology: true
 }
 );

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("[✅] MongoDB is Online!".green);
  });


