var express = require('express');
var router = express.Router();
var bars = require('./../controllers/barsController');

/* GET home page. */
router.get('/', bars.index);
router.get('/new', bars.newBar);
router.post('/', bars.create);
router.get('/:id', bars.show);
router.delete('/:id', bars.deleteBar);
router.get('/:id/beers/new', bars.newServe);
router.post('/:barId/beers/:beerId', bars.createServe);
router.delete('/:barId/beers/:beerId', bars.deleteServe);

module.exports = router;
