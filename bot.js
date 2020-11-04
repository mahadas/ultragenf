const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "$"

client.on("ready", () => {
	client.user.setPresence({
       status: "online",
       game: {
           name: "$ayuda | Ranger BOT",
           url: "https://twitch.tv/brg_mahada",
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
		if (message.author.tag == "mahada#0641") {
			if (text == "roberto") {
				message.member.addRole('772617653029699605');
				message.channel.send({embed: {
				color: 3066993,
				description: `:satellite_orbital:` + message.author + ` te has verificado correctamente :satellite_orbital: `
			}});
			} else {
				message.channel.send({embed: {
				color: 15158332,
				description: `:satellite_orbital:` + message.author + ` pusiste mal la clave unica, prueba denuevo :satellite_orbital: `
				}});
			}
		}
	}
	
	if (command === 'avatar') {
		message.channel.send(message.author.avatarURL());
	}
	
	
	if (command === 'prueba') {
		message.channel.send('El usuario es ' + message.author.tag);
	
	}
	if (command === 'dado') {
		let limit = args[0];
		if (!limit) limit = 6;
   		const n = Math.floor(Math.random() * limit + 1);
		 if (!n || limit <= 0)
		      return this.sendErrorMessage(message, 0, 'Please provide a valid number of dice sides');
		    const embed = new MessageEmbed()
		      .setTitle('🎲  Dice Roll  🎲')
		      .setDescription(`${message.member}, you rolled a **${n}**!`)
		      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
		      .setTimestamp()
		      .setColor(message.guild.me.displayHexColor);
		    message.channel.send(embed);
});




client.login(process.env.BOT_TOKEN);
