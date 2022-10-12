const express = require('express');
const router = express.Router();

const categorysApiController = require("../../controllers/api/categorysApiController")

router.get("/", categorysApiController.list)

module.exports = router