const mongoose = require('mongoose');

const Users = new mongoose.Schema({
        id: { type: String, unique: true, required: true },
        tag: { type: String, required: true },
        bal: { type: Number, required: true }
     });

 module.exports = mongoose.model('DiscordUsers', Users);

