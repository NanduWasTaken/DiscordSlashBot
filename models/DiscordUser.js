const mongoose = require('mongoose');

const DiscordUserSchema = new mongoose.Schema({
        discordId: { type: String, required: true },
        username: { type: String, required: true },
        money: { type: String, require: true, default: "100" },
        avatar: { type: String, required: true }
     });

 module.exports = mongoose.model('discord_users', DiscordUserSchema);

