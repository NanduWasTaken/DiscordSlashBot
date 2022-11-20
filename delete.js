const { REST, Routes } = require('discord.js');
const { clientId, guildId } = require('./config.json');
const token = process.env["TOKEN"];
const rest = new REST({ version: '10' }).setToken(token)

        // for global commands
rest.put(Routes.applicationCommands(clientId), { body: [] })
    .then(() => console.log('Successfully deleted all application commands.'))
    .catch(console.error);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);