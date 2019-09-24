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


client.on("message", message => {
	if (command === prefix + "ayuda") {
		message.reply('Todo bien a todos weones culeados')
	}
	if (command === prefix + "anuncio") {
		if (!args.length) {
			message.channel.send('No pusiste ningun argumento')
		}
		else if (args[0] === 'foo') {
			return message.channel.send('bareass');
		}
	}		
});

client.login(process.env.BOT_TOKEN);
