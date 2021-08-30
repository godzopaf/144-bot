module.exports = {
    name: 'av',
    execute(message, Discord) {

        if(message.mentions.users.size){
            let member=message.mentions.users.first()
        if(member){
            const emb=new Discord.MessageEmbed().setImage(message.author.displayAvatarURL({dynamic : true}) + "?size=2048").setFooter(`Ran by ${message.author.username}`, `${message.author.displayAvatarURL({dynamic : true})}`)
            message.channel.send(emb)
            message.delete()
        }
        else{
            message.channel.send("User not found.")
            message.delete()
        }
        }else{
            const emb=new Discord.MessageEmbed().setImage(message.author.displayAvatarURL({dynamic : true}) + "?size=2048")
            .setFooter(`Ran by ${message.author.username}`, `${message.author.displayAvatarURL({dynamic : true})}`)
            .setTimestamp();
            message.channel.send(emb)
            message.delete()
        }
    },
};