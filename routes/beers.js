var express = require('express');
var router = express.Router();
var beers = require('./../controllers/beersController');

/* GET users listing. */
router.get('/', beers.index);

module.exports = router;
