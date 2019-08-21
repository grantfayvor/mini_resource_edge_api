const model = require("../models/Asset");

const assetController = {
  create: (req, res) => {
    return model.create(req.body, (error, result) => {
      return sendResponse(error, result, res);
    });
  }
}

function sendResponse(error, result, responder) {
  if(error) {
    responder.status(501);
    return responder.send(error);
  }
  responder.send(result);
}

module.exports = assetController;