const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!"


client.on("ready", () => {
	console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
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
	if (message.content.startsWith(prefix + "ping")) {
		message.channel.send("pong!");
	} else
	if (message.content.startsWith(prefix + "foo")) {
		message.channel.send("bar!");
 	 }
	else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`First argument: ${args[0]}`);
	}
	else if (command === 'anuncio') {
		let text = args.join(" ");
		message.delete();
		message
		message.channel.send({embed: {
			color: 3447003,
			description: '(text)'
		}});
	}
	if (message.content.startsWith(prefix + "encuesta")) {
		message.channel.send('Agrege una pregunta para la encuesta.')
 
		const embed = new Discord.RichEmbed()
			.setAuthor('Pregunta:')
			.setDescription(''+args+'\n▔▔▔▔▔▔▔▔▔▔▔')
			.addField('Me gusta', '✅')
			.addField('No me gusta', '❎')
			.setColor(1752220)
			.setTimestamp()
			message.react('✅');
			message.react('❎');
		message.channel.send({embed})
	}
	if (message.content.startsWith(prefix + "limpiar")) {
	
     if (message.member.hasPermission("MANAGE_MESSAGES")) {
         messages = message.channel.fetchMessages();
        message.channel.bulkDelete(messages);
            }
	}        
	if (message.content.startsWith(prefix + "ayuda")) {
		const ayuda = new Discord.RichEmbed()
			.setAuthor('Aca te dejamos nuestros comandos' , 'https://cdn.tebex.io/webstore/799123/images/799123-98e9b9ee1e018f32203ec1984acb30a2459c79d9.png')
			.addField('.Ping', 'Comprueba la latencia del BOT.')
			.addField('.Ip', 'Te muestro la ip del servidor.')
			.addField('.Online', 'Te muestra las personas conectadas en el servidor.')
			.addField('.Redes', 'Mira nuestras redes sociales.')
			.addField('.Servidor', 'Muestra la informacion del servidor de discord.')
			.setColor(3447003)
			.setTimestamp()
			.setFooter('IP: play.heavenmc.es');
		message.channel.send({ayuda})
	if (message.content.startsWith(prefix + "redes")) {
		message.channel.send({embed: {
			color: 10181046,
      	author: {
			name: "Estas son nuestras redes sociales",
			icon_url: "https://cdn.tebex.io/webstore/799123/images/799123-98e9b9ee1e018f32203ec1984acb30a2459c79d9.png"
		},
		fields: [{
			name: "YouTube",
			value: "[Click aqui para redirigirse](https://www.youtube.com/channel/UCGT6xTgjXo2hqwL8GVG2MBg?view_as=subscriber)"
		},
		{
			name: "Instagram",
			value: "[Click aqui para redirigirse](https://www.instagram.com/heavenmces/)"
		},
		{
			name: "Twitter",
			value: "[Click aqui para redirigirse](https://twitter.com/HeavenMC7)"
		}
		],
		timestamp: neww Date(),
		footer: {
		icon_url: client.user.avatarURL,
		text: "IP: play.heavenmc.es"
      }
    }

});


client.login(process.env.BOT_TOKEN);

     
     
