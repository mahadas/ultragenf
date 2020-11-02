const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "$"

client.on("ready", () => {
	client.user.setPresence({
       status: "online",
       game: {
           name: "$ayuda | Verificación Unica",
           url: "https://twitter.com/_mahada_",
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
	if (command === 'verificar') {
		const role = message.guild.roles.cache.find(role => role.name === ‘VERIFICADO’)
		const target = message.mentions.members.first();
		let text = args.join(" ");
		if (message.author.tag == "mahada#0641") {
			if (text == "roberto") {
				target.roles.cache.add(role) 
				message.channel.send({embed: {
				color: 3066993,
				description: `:satellite_orbital: Te has verificado correctamente :satellite_orbital: `
			}});
			} else {
				message.channel.send({embed: {
				color: 15158332,
				description: `:satellite_orbital: Pusiste mal la clave unica, prueba denuevo :satellite_orbital: `

				}});
			}
			
		}
	}	
	if (command === 'prueba') {
		message.channel.send('El usuario es ' + message.author.tag);
	
	}
});




client.login(process.env.BOT_TOKEN);
