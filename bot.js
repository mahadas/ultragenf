const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.on("ready", () => {
   console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
});

client.on("guildMemberAdd", (member) => {
   var canal = client.channels.get('625499285215117343'); 
   canal.send(`${member.user}, bienvenido al servidor pasala bien.`);   
});


client.on("message", (message) => {
	if (message.content.startsWith("ping")) {
		message.channel.send("pong!");

	}
	if (message.content.startsWith(prefix +"richembed" )){
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


});


function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send("It looks like you might need help with " + arguments)
    } else {
        receivedMessage.channel.send("I'm not sure what you need help with. Try `!help [topic]`")
    }
}

client.login(process.env.BOT_TOKEN);
