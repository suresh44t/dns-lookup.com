const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: String,
    timestamp: Number,
    records: Array
});

module.exports = mongoose.model('Domain', schema);
