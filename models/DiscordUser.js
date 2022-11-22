const mongoose = require('mongoose');

const Users = new mongoose.Schema({
        id: { type: String, unique: true, required: true },
        tag: { type: String, required: true },
        date: { type: Date, default: Date.now },
        bal: { type: Number, required: true }
     });

 module.exports = mongoose.model('DiscordUsers', Users);

