const router = require("express").Router(),
assetController = require("../controllers/AssetController");

router.post("/", assetController.create);
router.get("/get", assetController.list);

module.exports = router;