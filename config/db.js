var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/thirsty-mongoose');

var db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', (err) => {
    console.error(`Database error: \n${err}`);
})