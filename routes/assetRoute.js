const router = require("express").Router(),
assetController = require("../src/controllers/AssetController");

router.post("/", assetController.create);

module.exports = router;