const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

router
  .route("/")
  .get(menuController.getMenu)
  .post(menuController.postMenuItem)
  .patch(menuController.patchMenuItem)
  .delete(menuController.deleteMenuItem);

module.exports = router;