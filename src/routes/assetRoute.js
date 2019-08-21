const router = require("express").Router(),
assetController = require("../controllers/AssetController");

router.post("/", assetController.create);

module.exports = router;