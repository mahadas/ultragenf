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
	else if (command === 'redes') {
		message.channel.send({embed: {
			color: 3447003,
      	author: {
			name: client.user.username,
			icon_url: client.user.avatarURL
		},
		title: "Anuncio",
		description: "Estas son las redes sociales del servidor.",
		fields: [{
			name: "YouTube",
			value: "[Click aqui para redirigirse](https://www.youtube.com/channel/UCGT6xTgjXo2hqwL8GVG2MBg?view_as=subscriber)"
		},
		{
			name: "Campo2",
			value: "Puedes poner [Enlaces web](https://github.com/CraterMaik) dentro del embed."
		},
		{
			name: "Campo3",
			value: "Puedes poner todos los Markdown *cursiva* **__Marcado__** dentro de un embed."
		}
		],
		timestamp: new Date(),
		footer: {
		icon_url: client.user.avatarURL,
		text: "github.com/CraterMaik"
      }
    }
});


	}



 if (command === "ban") {
   let buser = message.mentions.users.first();
   let breason = args.join(" ");
   if (!buser) return message.channel.send("Menciona a alguien")
   if (!breason) return message.channel.send("Dime la razon del ban")
   if (!message.member.hasPermission["BAN_MEMBERS"]) return message.channel.send("Sin permisos bro")
   
  const bembed = new Discord.RichEmbed()
   .setAuthor('Baneos de HeavenMC Discord')
   .setThumbnail(buser.avatarURL)
   .setColor("0xFF0000")
   .addField("User Baneado", buser.username)
   .addField("ID", buser.id)
   .addField("Motivo", breason)
   .addField("Staff", message.author.username)
   message.guild.member(buser).ban(breason).reason
   buser.send(bembed)
   message.channel.send(bembed)
   
   }
 


});


client.login(process.env.BOT_TOKEN);
