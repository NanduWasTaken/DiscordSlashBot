const { REST, Routes } = require('discord.js');
const { clientId, guildId } = require('./config.json');
const token = process.env["TOKEN"];
const rest = new REST({ version: '10' }).setToken(token)
var colors = require('colors');

        // for global commands
rest.put(Routes.applicationCommands(clientId), { body: [] })
    .then(() => console.log('Successfully deleted all application commands.'.red))
    .catch(console.error);

