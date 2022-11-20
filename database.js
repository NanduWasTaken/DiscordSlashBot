const mongoose = require('mongoose');

const DiscordUserSchema = new mongoose.Schema({
    discordId: { type: String, required: true },
    username: { type: String, required: true },
    avatar: { type: String, required: true },
    balance: { type: String, required: true },
 });

 module.exports = mongoose.model('discord_users', DiscordUserSchema);

