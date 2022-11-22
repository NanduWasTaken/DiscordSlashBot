const { ActivityType } = require("discord.js");
module.exports = {
     name: 'ready',
     once: true,
    	execute(client) {
         console.log(`[✅] Ready! Logged in as ${client.user.tag}`.green);
         console.log(`[⚙️] ${client.user.tag} is on ${client.guilds.cache.size} servers!`.green)
         client.user.setPresence({
          activities: [{ name: `Mighty Walnut`, type: ActivityType.Playing }],
     	status: 'dnd',
        	});
                            
        }
};