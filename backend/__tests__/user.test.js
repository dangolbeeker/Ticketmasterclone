const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
     phone: { type: String, required: true },
     email: { type: String },
     password: { type: String, required: true, minlength: 6},
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
