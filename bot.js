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
		let text = args.join(" ");
		if (client.users.cache.get("323614229968191489")) {
			if (text == "mahada") {
				message.channel.send('Te verificaste correctamente');
			
				
			}else {
				message.channel.send('El codigo de verificacion no es correcto');
				
			}
			
		}
	}			
});




client.login(process.env.BOT_TOKEN);
