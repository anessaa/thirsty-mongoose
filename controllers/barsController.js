var Bar = require('./../models/bar');


function index(req,res) {
    Bar.find({}, (err, doc) => {
        res.render('./bars/index', { bars: doc })
    })
}

module.exports = {
    index
}