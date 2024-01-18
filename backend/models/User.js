const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    email: String,
    password: String,
});


module.exports = mongoose.model('User', userSchema);