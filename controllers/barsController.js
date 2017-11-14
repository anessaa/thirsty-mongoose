var Bar = require('./../models/bar');
var Beer = require('./../models/beer');

function index(req,res) {
    Bar.find({}, (err, doc) => {
        res.render('./bars/index', { bars: doc })
    })
}

function newBar(req,res) {
    res.render('./bars/new');
}

function create(req,res) {
    var bar = new Bar(req.body);

    if (bar.save()) {
        res.redirect(`/bars/${bar.id}`);
    } else {
        res.render("./bars/new");
    }
}

function show(req, res) {
    Bar.findById(req.params.id).populate('beers').exec((err, doc) => {
        res.render("./bars/show", { bar: doc })
    });
}

function deleteBar(req, res) {
    Bar.findById(req.params.id, (err,bar) => {
        bar.remove();
        res.redirect('/bars');
    });
}

function newServe(req,res) {
    Beer.find({bars: {$ne: req.params.id}})
        .exec(function(err, beers) {
            res.render('bars/serve', {beers, barId: req.params.id });
        });
}

function createServe(req, res) {
    Bar.findById(req.params.barId, (err,bar) => {
        bar.beers.push(req.params.beerId);
        bar.save(() => {
            Beer.findById(req.params.beerId, (err, beer) => {
                beer.bars.push(req.params.barId);
                beer.save(() => {
                    res.redirect(`/bars/${bar.id}`);
                });
            });
        });
    });
}

function deleteServe(req, res) {
    Bar.findById(req.params.barId, (err, bar) => {
        bar.beers.remove(req.params.beerId);
        bar.save(() => {
            Beer.findById(req.params.beerId, (err, beer) => {
                beer.bars.remove(req.params.barId);
                beer.save(() => {
                    res.redirect(`/bars/${bar.id}`);
                });
            });
        });
    });
}


module.exports = {
    index,
    newBar,
    create,
    show,
    deleteBar,
    newServe,
    createServe,
    deleteServe
}