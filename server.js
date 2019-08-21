var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  config = require("./config"),
  port = parseInt(process.env.PORT) || config.server.port || 9000,
  assetRoute = require("./src/routes/assetRoute");

app.use('/api/asset', assetRoute);


app.listen(port, "127.0.0.1", args => {
  console.log("started server on port - " + port);
  mongoose.connect(`mongodb://${config.database.address + ':' + config.database.port}/${config.database.name}`, {
    useNewUrlParser: true
  }, error => {
    if (error) return console.log(error);
    console.log("mongodb connection was successful");
  });
});

