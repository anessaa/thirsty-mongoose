var Beer = require('./../models/beer');



function index(req,res) {
    Beer.find({}, (err, doc) => {
        res.render('./beers/index', { beers: doc })
    });
}

module.exports = {
    index
}