var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var barSchema = new Schema({
    name: String,
    location: String,
    beers: [{type: Schema.Types.ObjectId, ref: 'Beer'}]
    }, {
        timestamps: true
    });

module.exports = mongoose.model('Bar', barSchema);