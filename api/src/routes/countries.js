const express = require("express");
const router = express.Router();

const {
  getCountriesID,
  getCountriesByName,
} = require("../controllers/countries");

router.get("/", getCountriesByName);

router.get("/:id", getCountriesID);

module.exports = router;
