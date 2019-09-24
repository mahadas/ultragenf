const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!"

client.on("ready", () => {
   console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
   client.user.setPresence( {
       status: "online",
       game: {
           name: `-help | Estoy en ${client.guilds.size} servidores.`,
           type: "PLAYING"
       }
    });
});


client.on('message', message => {
	var Comando = 'anuncio';
	if (command === 'avatar') {
		if (args[0]) {
			const user = getUserFromMention(args[0]);
			if (!user) {
				return message.reply('Please use a proper mention if you want to see someone else\'s avatar.');
			}

			return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL}`);
		}

		return message.channel.send(`${message.author.username}, your avatar: ${message.author.displayAvatarURL}`);
	}
});



client.login(process.env.BOT_TOKEN);
