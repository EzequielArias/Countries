const express = require("express");
const router = express.Router();
const {
  createActivity,
  getActivitiesOrFilter,
} = require("../controllers/activities");

router.get("/", getActivitiesOrFilter);

router.post("/", createActivity);

module.exports = router;
