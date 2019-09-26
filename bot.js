const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!"

client.on("ready", () => {
	client.user.setPresence({
       status: "online",
       game: {
           name: "!ayuda | UltraGen",
           url: "https://youtube.com/c/FacuJM",
           type: "STREAMING"
       }
   });
});


client.on("message", (message) => {
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();	
	if (command === 'conexion') {
		let ping = Math.floor(message.client.ping);
		message.channel.send({embed: {
				color: 7419530,
				description: `:satellite_orbital: Tu conexion es de ${ping} ms`
			}});	
	}
	if (message.content.startsWith(prefix + "prueba")) {
		if (message.channel.id === '626559477566406666') {	
			message.channel.send('estas en este canal')
		}
		else {
			message.channel.send({embed: {
				color: 15158332,
				description: 'No puedes usar este comando en este canal.'
			}});			

		}
	}


});




client.login(process.env.BOT_TOKEN);
