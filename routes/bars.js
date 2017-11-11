var express = require('express');
var router = express.Router();
var bars = require('./../controllers/barsController');

/* GET home page. */
router.get('/', bars.index);

module.exports = router;
