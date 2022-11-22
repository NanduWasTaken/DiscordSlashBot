const { SlashCommandBuilder } = require('discord.js');
const Users = require('../models/DiscordUser.js')
const user = interaction.user;

module.exports = {
	data: new SlashCommandBuilder()
    	.setName('create')
        .setDescription('Replies with Pong!'),
        async execute(interaction) {
             const newUsers = new Users({
                 id: user.id,
                 tag: user.tag,
                 bal: "1000"
         });   

         newUser.save().catch(err => {
                 console.error(err)
           })
    },
 };