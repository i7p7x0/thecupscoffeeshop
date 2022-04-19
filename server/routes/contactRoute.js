const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router
  .route("/")
  .get(contactController.getContact)
  .post(contactController.postContact)
  .patch(contactController.patchContact)
  .delete(contactController.deleteContact);

module.exports = router;
