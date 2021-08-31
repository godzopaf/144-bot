module.exports = {
    name: 'log',
    description: "changelog",
    execute(message, args, Discord) {
      
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Changelog ')
        .addFields(
            {name: '8/31/2021', value: "Added Banall, Kickall, Nickall (godz)"},
            {name: '3/2021', value: "Added Demoji, drole, dchannel, nukeserver (godz)"},
        )
        .setFooter('-godz');

        message.channel.send(newEmbed)
        console.log('Ran log command. (SUCCESS)'); 
    }
    
}
