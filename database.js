const mongoose = require('mongoose');


mongoose.connect(process.env.DPASS,
 {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
 }
 );

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("MongoDB is Online!");
  });


