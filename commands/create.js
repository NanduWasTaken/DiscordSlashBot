const { SlashCommandBuilder } = require('discord.js');
const DiscordUsers = require('../models/DiscordUser.js')

module.exports = {
	data: new SlashCommandBuilder()
    	.setName('create')
        .setDescription('Replies with Pong!'),
        async execute(interaction) {
            const user = interaction;

           return user.reply('created!')
           const newUsers = new DiscordUsers({
             id: user.id,
             tag: user.tag,
             bal: "1000"
  });   

  newUser.save().catch(err => {
       console.error(err)
  });
    },
 };