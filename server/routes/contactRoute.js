const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router
  .route("/")
  .get(contactController.getContact)
  .patch(contactController.patchContact);

module.exports = router;
