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
