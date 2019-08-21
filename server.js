var express = require("express"),
  app = express(),
  port = parseInt(process.env.PORT) || 9000,
  assetRoute = require("./src/routes/assetRoute");


app.use('/api/asset', assetRoute);


app.listen(port, "127.0.0.1", args => {
  console.log("started server on port - " + port);
});

