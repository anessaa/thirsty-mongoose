var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bar = require('./bar');


var commentSchema = new Schema({
    content: String
})

var beerSchema = new Schema({
    name: String,
    style: String,
    bars: [{type: Schema.Types.ObjectId, ref: 'Bar'}],
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Beer', beerSchema);

