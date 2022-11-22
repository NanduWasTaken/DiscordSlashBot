const { SlashCommandBuilder } = require('discord.js');
const Users = require('../models/DiscordUser.js')

module.exports = {
	data: new SlashCommandBuilder()
    	.setName('create')
        .setDescription('Replies with Pong!'),
        async execute(interaction) {
            const user = interaction.user;

           return interaction.reply('created!')
    },
 };