const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marioCharSchema = new Schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('marioChar',marioCharSchema);

module.exports = MarioChar;