const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('El bot ha sido iniciado correctamente.');
});

const prefix = "!"

client.on('message', message => {
	if (command === 'ping') {
		message.channel.send('Aca tienes tu ping.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	}
	if (message.content.startsWith(prefix +"generar" )){
	    const embed = new Discord.RichEmbed() 
	    .setTitle("Este es su título, puede contener 256 caracteres")
	    .setAuthor(message.author.username, message.author.avatarURL)
	    .setColor(0x00AE86)
	    .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
	    .setFooter("Pie de página, puede contener 2048 caracteres", client.user.avatarURL)
	    .setImage(message.author.avatarURL)
	    .setThumbnail(message.author.avatarURL)
	    .setTimestamp()
	    .setURL("https://github.com/CraterMaik")
	    .addField("Este es un título de campo, puede contener 256 caracteres",
	      "Este es un valor de campo, puede contener 2048 caracteres.")
	    .addField("Campo en línea", "Debajo del campo en línea", true)
	    .addBlankField(true)
	    .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
	    
	    message.channel.send({embed});
	}
	if (command === 'ip') {
	
	const ipEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('FmxCraft BOT')
	.setURL('https://discord.js.org/')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Regular field title', 'Some value here')
	.addBlankField()
	
	channel.send(ipEmbed);
	}
});

client.login(process.env.BOT_TOKEN);
