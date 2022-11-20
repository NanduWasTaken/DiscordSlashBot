module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

    	if (!command) {
        	 console.error(`No command matching ${interaction.commandName} was found.`);
         return;
         }
        try {
        await command.execute(interaction);
         } catch (error) {
      		 console.error(`Error executing ${interaction.commandName}`);
             console.error(error);
		 }
        const mongoose = require('mongoose');
        const user = await UserModel.findOne({ discordId: interaction.user.id });
        const DiscordUser = require('../models/DiscordUser');
        if(user) {
            return;
        } else {
          const newUser = await DiscordUser.create({
              discordId: interaction.user.id,
              username: interaction.user.tag,
              money: `1000`
                 });
             await newUser.save();                                                   
        }






 	},
};
