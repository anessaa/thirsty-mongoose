var express = require('express');
var router = express.Router();
var beers = require('./../controllers/beersController');

/* GET users listing. */
router.get('/', beers.index);
router.get('/new', beers.newBeer);
router.post('/', beers.create);
router.get('/:id', beers.show);
router.delete('/:id', beers.deleteBeer);

module.exports = router;
