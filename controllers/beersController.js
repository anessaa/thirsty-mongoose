var Beer = require('./../models/beer');

function index(req,res) {
    Beer.find({}, (err, doc) => {
        res.render("./beers/index", { beers: doc })
    });
}

function show(req,res){
    Beer.findById(req.params.id).populate('bars').exec((err,doc) => {
        res.render("./beers/show", { beer: doc })
    });
}

function newBeer(req,res) {
    res.render("./beers/new");
}

function create(req,res) {
    var beer = new Beer(req.body);

    if (beer.save()) {
        res.redirect(`/beers/${beer.id}`);
    } else {
        res.render("./beers/new");
    }
}

function deleteBeer(req, res) {
    Beer.findById(req.params.id, (err, beer) => {
        beer.remove();
        res.redirect("/beers");
    });
}

module.exports = {
    index,
    newBeer,
    create,
    show,
    deleteBeer
}