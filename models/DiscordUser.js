const mongoose = require('mongoose');

const DiscordUserSchema = new mongoose.Schema({
        discordId: { type: String, required: true },
        username: { type: String, required: true },
        money: { type: String, required: true },
     });

 module.exports = mongoose.model('DiscordUsers', DiscordUserSchema);

